# Git Upload Script
Write-Host "Checking git status..."
git status

Write-Host "Adding all files..."
git add .

Write-Host "Committing changes..."
git commit -m "Update astrology tool and theme files"

Write-Host "Pushing to GitHub..."
git push origin main

Write-Host "Done!"
