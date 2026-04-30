# Terraform — Chandu D Portfolio AWS Infrastructure

This Terraform configuration provisions a production-grade AWS foundation for hosting the portfolio:

| Resource | Purpose |
|----------|---------|
| **S3 bucket** | Private, versioned, SSE-S3 encrypted origin for static assets |
| **CloudFront** | Global CDN with TLS, HTTP/2+3, gzip, SPA fallback |
| **OAC** | Origin Access Control — only CloudFront can read the bucket |
| **ACM** (optional) | DNS-validated TLS certificate in `us-east-1` for custom domain |
| **IAM OIDC** | GitHub Actions trust — **zero long-lived AWS keys** |

## Quick start

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
# edit terraform.tfvars (domain_name, github_repository, etc.)

terraform init
terraform plan
terraform apply
```

## Outputs → GitHub Secrets

After `apply`, copy the outputs into your repo's **Settings → Secrets and variables → Actions**:

| GitHub Secret | Source |
|---------------|--------|
| `AWS_DEPLOY_ROLE` | `deploy_role_arn` output |
| `AWS_REGION` | e.g. `ap-south-1` |
| `S3_BUCKET` | `site_bucket` output |
| `CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` output |

Once set, every push to `main` triggers `.github/workflows/ci-cd.yml` which builds, syncs to S3, and invalidates CloudFront — all under a short-lived STS session issued via OIDC.

## Cost

- **S3**: ~$0.023/GB/month (< $0.10)
- **CloudFront**: PriceClass 100 (NA + EU) — first 1 TB free/month on AWS Free Tier
- **ACM cert**: free
- **IAM / OIDC**: free

Expected monthly cost: **< $1** for a portfolio-sized site.

## Remote state (recommended for teams)

Uncomment the `backend "s3"` block in `versions.tf` and pre-create the state bucket + DynamoDB lock table.
