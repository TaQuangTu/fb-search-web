# GitHub Workflow Setup Instructions

This repository includes a GitHub Actions workflow that automatically builds, pushes to GitHub Container Registry, and deploys your application to an SSH server.

## Required GitHub Secrets

To use this workflow, you need to set up the following secrets in your GitHub repository:

### Go to: Repository Settings → Secrets and variables → Actions → New repository secret

1. **SSH_HOST**: The IP address or hostname of your deployment server
   - Example: `192.168.1.100` or `yourserver.com`

2. **SSH_USERNAME**: The username for SSH access to your server
   - Example: `ubuntu`, `root`, or your custom username

3. **SSH_PRIVATE_KEY**: Your SSH private key for authentication
   - Generate with: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
   - Copy the contents of the private key file (usually `~/.ssh/id_rsa`)
   - Make sure the corresponding public key is in `~/.ssh/authorized_keys` on your server

4. **SSH_PORT**: The SSH port (optional, defaults to 22)
   - Example: `22` or `2222`

5. **API_BASE_URL**: The base URL for your API (optional)
   - Example: `https://api.yourserver.com` or `http://localhost:8000`

## Server Prerequisites

Your deployment server needs to have Docker installed:

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# After installation, log out and back in
```

## Workflow Triggers

The workflow runs on:

- Push to `main` or `master` branch
- Manual trigger via GitHub Actions tab (workflow_dispatch)

## What the Workflow Does

1. **Build Stage**:
   - Checks out the code
   - Logs into GitHub Container Registry
   - Builds the Docker image using your Dockerfile
   - Pushes the image to `ghcr.io/username/repository-name`

2. **Deploy Stage** (only on main/master):
   - Connects to your SSH server
   - Stops any existing container
   - Pulls the latest image
   - Starts a new container on port 3000
   - Cleans up old Docker images

## Container Details

The deployed container:

- **Name**: `facebook-search-web`
- **Port**: 3000 (maps to host port 3000)
- **Restart Policy**: `unless-stopped`
- **Environment**: `API_BASE_URL` from secrets

## Troubleshooting

### SSH Connection Issues

- Verify SSH_HOST, SSH_USERNAME, and SSH_PORT are correct
- Ensure SSH_PRIVATE_KEY is the complete private key including headers
- Test SSH connection manually: `ssh -p PORT USERNAME@HOST`

### Docker Issues on Server

- Ensure Docker is installed and running: `sudo systemctl status docker`
- Check if user is in docker group: `groups $USER`
- Verify port 3000 is available: `sudo netstat -tlnp | grep :3000`

### GitHub Container Registry Issues

- Repository must be public or you need proper permissions
- Check if packages are visible in your GitHub repository's Packages tab

## Manual Deployment

To deploy manually without the workflow:

```bash
# On your server
docker pull ghcr.io/username/repository-name:latest
docker stop facebook-search-web || true
docker rm facebook-search-web || true
docker run -d \
  --name facebook-search-web \
  --restart unless-stopped \
  -p 3000:3000 \
  -e API_BASE_URL=your_api_url \
  ghcr.io/username/repository-name:latest
```
