# First Pipeline Challenge

![CI/CD Pipeline](https://github.com/Sidestep-Error/can-i-c-your-i-d/actions/workflows/pipeline.yml/badge.svg)

Workflow: [CI/CD Pipeline](https://github.com/Sidestep-Error/can-i-c-your-i-d/actions/workflows/pipeline.yml)

Live deployment: Pending (`DEPLOY_WEBHOOK_URL` not configured yet)

## About

Week 4 Boiler Room Hackathon - Building a complete CI/CD pipeline.

## Architecture

```
Code Push -> GitHub Actions -> Tests -> Docker Build -> Trivy Scan -> Deploy
```

## Implemented

- Express app with `/status` health endpoint.
- Secret objective endpoint: `GET /secret`.
- Stable test suite for both endpoints using dynamic test port.
- Dockerfile + docker-compose for local container run.
- GitHub Actions pipeline with:
  - dependency install
  - tests
  - Docker image build
  - Trivy image scan
  - deploy webhook trigger on push to `main` (when secret is set)

## Current Status

- PR merged to `main`.
- CI pipeline configured and versioned in repository.
- Deployment trigger configured in workflow but waiting for `DEPLOY_WEBHOOK_URL` secret.
