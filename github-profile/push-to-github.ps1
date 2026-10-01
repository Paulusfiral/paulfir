Param()

# Script to publish this Profile README to https://github.com/Paulusfiral/Paulusfiral
Write-Host "Publishing GitHub Profile README to repository 'Paulusfiral'..." -ForegroundColor Cyan

git init
git add README.md
git commit -m "feat: setup attractive profile README"
git branch -M main
git remote remove origin 2>$null
git remote add origin "https://github.com/Paulusfiral/Paulusfiral.git"
git push -u origin main --force

Write-Host "Done! Visit your profile at: https://github.com/Paulusfiral" -ForegroundColor Green

