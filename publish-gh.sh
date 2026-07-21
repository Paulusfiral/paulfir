#!/usr/bin/env bash
# Simple helper to create GitHub repo named `paulfir` and push current folder
# Requires: Git and GitHub CLI (`gh`) authenticated (run `gh auth login` if needed)

set -e

REPO_NAME="paulfir"
USERNAME="paulusfiral"

echo "Creating repository ${USERNAME}/${REPO_NAME} (public) and pushing..."

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI not found. Install from https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Please login with 'gh auth login' and re-run this script."
  exit 1
fi

git init || true
git add .
git commit -m "Prepare site for GitHub Pages" || true

# create repo and push (will fail if repo exists)
gh repo create ${USERNAME}/${REPO_NAME} --public --source=. --remote=origin --push || {
  echo "Repository may already exist. Attempting to set remote and push..."
  git remote add origin https://github.com/${USERNAME}/${REPO_NAME}.git || true
  git push -u origin main
}

echo "Done. Visit: https://$USERNAME.github.io/$REPO_NAME/"
