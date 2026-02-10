# First Pipeline Challenge - Silver & Gold Edition 🥈🥇

![CI](https://github.com/Sidestep-Error/can-i-c-your-i-d/actions/workflows/ci.yml/badge.svg?branch=main)

**Live Environments:**
- Production: [https://can-i-c-your-i-d.onrender.com/]
- Staging: [https://github.com/Sidestep-Error/can-i-c-your-i-d]

## About

Week 4 Boiler Room Hackathon - Advanced CI/CD pipeline with comprehensive testing, multi-stage Docker builds, and production-ready deployments.

## Features

### Silver 🥈
- ✅ Comprehensive test suite (10+ tests)
- ✅ Code coverage reporting with c8
- ✅ Health check endpoints (`/health`, `/ready`, `/live`)
- ✅ Advanced error handling
- ✅ Request logging middleware

### Gold 🥇
- ✅ Multi-stage Docker build (optimized image size)
- ✅ Dependency caching strategies
- ✅ Separate staging & production environments
- ✅ Security scanning with Trivy
- ✅ Container structure tests
- ✅ Non-root user in container
- ✅ Health checks in Dockerfile
- ✅ Notification system ready (Slack/Discord)

## Architecture

```
Code Push → GitHub Actions → [Test & Quality] → [Build & Scan] → [Deploy Staging] → [Deploy Production] → Notify
                                    ↓                  ↓
                              Code Coverage      Trivy Security
                              Linting            Container Tests
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Landing page with links |
| `/status` | GET | Simple status check |
| `/health` | GET | Detailed health metrics |
| `/ready` | GET | Readiness probe |
| `/live` | GET | Liveness probe |
| `/version` | GET | Version information |
| `/api/echo` | POST | Echo API (example) |

## Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build and run with Docker
docker-compose up --build

# Build Docker image manually
docker build -t first-pipeline:latest .

# Run container
docker run -p 3000:3000 first-pipeline:latest
```

## Pipeline Jobs

1. **Test & Quality** - Runs tests, linting, security audit, generates coverage
2. **Build & Scan** - Builds Docker image, runs Trivy scan, validates container
3. **Deploy Staging** - Deploys to staging environment (on `staging` branch)
4. **Deploy Production** - Deploys to production (on `main` branch)
5. **Notify** - Sends notifications about pipeline status

## Environment Variables

```bash
PORT=3000                    # Server port
NODE_ENV=production          # Environment
VERSION=1.0.0                # Application version
BUILD_NUMBER=123             # Build number
COMMIT_SHA=abc123            # Git commit SHA
```

## Docker Image Optimization

**Multi-stage build benefits:**
- Smaller final image size (~50% reduction)
- No dev dependencies in production
- Faster startup time
- Enhanced security (non-root user)
- Built-in health checks

## Monitoring & Observability

- Health checks every 30s
- Memory usage tracking
- Uptime monitoring
- Request logging
- Error tracking

## Security Features

- Trivy vulnerability scanning
- Non-root container user
- Security audit in pipeline
- Minimal attack surface
- Dependency vulnerability checks

## Achievement Status

- ✅ Bronze - Basic CI/CD pipeline
- ✅ Silver - Enhanced testing & monitoring  
- ✅ Gold - Production-ready deployment
- 🎯 Secret - (Keep pushing for advanced features!)

## Next Steps (Secret Achievement)

- [ ] Implement blue-green deployment
- [ ] Add automatic rollback on failure
- [ ] Performance monitoring (Prometheus/Grafana)
- [ ] Log aggregation (ELK/Loki)
- [ ] Distributed tracing
- [ ] Load testing in pipeline
- [ ] Chaos engineering tests

## Tech Stack

- Node.js 18
- Express.js
- Docker (multi-stage)
- GitHub Actions
- Trivy Security Scanner
- c8 Code Coverage

---

**Skapad av:** Stoffe  
**Kurs:** Boiler Room Week 4 - Chas Academy  
**Datum:** 2026-02-10