output "site_bucket" {
  description = "S3 bucket hosting the static site"
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (used by CI for invalidation)"
  value       = aws_cloudfront_distribution.cdn.id
}

output "cloudfront_domain" {
  description = "CloudFront default domain"
  value       = aws_cloudfront_distribution.cdn.domain_name
}

output "deploy_role_arn" {
  description = "IAM role ARN to set as GitHub secret AWS_DEPLOY_ROLE"
  value       = aws_iam_role.deploy.arn
}

output "github_actions_secrets" {
  description = "Copy these values into GitHub repo secrets"
  value = {
    AWS_DEPLOY_ROLE            = aws_iam_role.deploy.arn
    AWS_REGION                 = var.aws_region
    S3_BUCKET                  = aws_s3_bucket.site.bucket
    CLOUDFRONT_DISTRIBUTION_ID = aws_cloudfront_distribution.cdn.id
  }
}
