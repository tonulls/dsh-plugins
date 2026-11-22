# `/ecc-docker-patterns`

Helps create and review Docker/Compose configurations, container security, networks and volumes, and test harnesses for CLI installers.

## Simple Request

```text
/ecc-docker-patterns Check my Python service Dockerfile for excessive privileges and image size.
```

## Template Request

```text
/ecc-docker-patterns
Docker/Compose files: [paths or contents]
Goal: [local development/production/installer test]
Environments: [OS and architecture]
Network, volume, and user constraints: [description]
Review only; do not build/run containers or modify files.
```

## Detailed Request

```text
/ecc-docker-patterns Analyze [Dockerfile/Compose/installer harness] for task [description]. Do not modify files or run containers. Check least privilege and user, layers and reproducibility, secrets without revealing values, networking, volumes and access boundaries, health checks, and service interactions. For installer harnesses, state which OSes are actually covered and where native macOS/Windows checks are required; do not present emulation as native testing. Suggest specific safe improvements and verification; do not install packages or perform network operations. Result: findings with paths and severity, proposed changes, and platform validation matrix.
```
