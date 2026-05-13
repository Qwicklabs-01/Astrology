# Run this in PowerShell from anywhere to repackage the fixed theme
$src = "c:\Users\SAKSHI\Desktop\tools\astrology tool\vedic-cosmic-theme"
$out = "c:\Users\SAKSHI\Desktop\vedic-cosmic-theme-FIXED.zip"
Compress-Archive -Path "$src\*" -DestinationPath $out -Force
Write-Host "✅ Theme packaged at: $out"
