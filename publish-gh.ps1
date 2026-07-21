Param()

# PowerShell helper to create GitHub repo `paulfir` and push current folder
# Requires Git and GitHub CLI (`gh`) authenticated (run `gh auth login` if needed)

$REPO_NAME = 'paulfir'
$USERNAME = 'paulusfiral'

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error 'gh CLI not found. Install from https://cli.github.com/'
  exit 1
}

try { gh auth status } catch { Write-Error 'Please run "gh auth login" first.'; exit 1 }

git init 2>$null
git add .
try { git commit -m 'Prepare site for GitHub Pages' } catch { }

try {
  gh repo create $USERNAME/$REPO_NAME --public --source=. --remote=origin --push
} catch {
  Write-Host 'Repo may exist. Attempting to set remote and push...'
  git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git" 2>$null
  git push -u origin main
}

Write-Host "Done. Visit: https://$USERNAME.github.io/$REPO_NAME/"
