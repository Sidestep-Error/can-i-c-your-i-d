# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2026-02-10

### Added
- Added `GET /secret` endpoint in `index.js` for the secret challenge objective.
- Added `docker-compose.yml` for local container run with health check on `/status`.
- Added `.dockerignore` to reduce Docker build context.
- Added team sync instructions in `README.md` for multi-developer collaboration.
- Added live deployment URL in `README.md`: `https://can-i-c-your-i-d.onrender.com/`.

### Changed
- Renamed source files to JavaScript extension format used by npm scripts:
  - `index` -> `index.js`
  - `test` -> `test.js`
- Updated `index.js` to only start the server when run directly (`require.main === module`), making it import-safe for tests.
- Updated `test.js` to verify both `GET /status` and `GET /secret` in one CI-friendly test run, using a dynamic port to avoid conflicts.
- Replaced `.github/workflows/pipeline.yml` scaffold with full CI/CD workflow:
  - install dependencies
  - run tests
  - build Docker image
  - Trivy security scan
  - deploy webhook on push to `main` (when `DEPLOY_WEBHOOK_URL` secret is set)
- Fixed deploy condition syntax in workflow to avoid GitHub Actions "Invalid workflow file" errors.
- Updated `README.md` to reflect current implementation and deployment requirements.

### Verified
- `package.json` scripts match file names:
  - `start`: `node index.js`
  - `test`: `node test.js`
- Local test run passes after installing dependencies.

### Remaining Work
- Configure `DEPLOY_WEBHOOK_URL` in GitHub repository secrets for live deployment.
