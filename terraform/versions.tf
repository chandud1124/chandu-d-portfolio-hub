terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.60"
    }
  }

  # Remote state — uncomment + configure before first `terraform init`
  # backend "s3" {
  #   bucket         = "chandu-terraform-state"
  #   key            = "portfolio/terraform.tfstate"
  #   region         = "ap-south-1"
  #   dynamodb_table = "chandu-terraform-lock"
  #   encrypt        = true
  # }
}
