variable "aws_region" {
  description = "Primary AWS region for the project"
  type        = string
  default     = "ap-south-1" # Mumbai
}

variable "project_name" {
  description = "Project slug used for tagging / naming"
  type        = string
  default     = "chandu-portfolio"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Apex domain served by CloudFront (e.g. chandu.dev). Leave blank to use CloudFront default domain only."
  type        = string
  default     = ""
}

variable "github_repository" {
  description = "GitHub org/repo for OIDC trust (e.g. chandud9966-png/chandu-d-portfolio-hub)"
  type        = string
  default     = "chandud9966-png/chandu-d-portfolio-hub"
}

variable "tags" {
  description = "Common tags"
  type        = map(string)
  default = {
    Project   = "chandu-portfolio"
    ManagedBy = "terraform"
    Owner     = "chandu"
  }
}
