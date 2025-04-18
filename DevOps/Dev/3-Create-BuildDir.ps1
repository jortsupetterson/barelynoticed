# DevOps/Create-BuildDir.ps1

param ([string]$Root = "builds")

# Päivämäärä kohtainen build kansio
$today = Get-Date -Format "d.M.yyyy"
$targetPath = Join-Path $Root $today

# Poistetaan vanha, jos olemassa roskien välttämiseksi
if (Test-Path $taregtPath) {
    Remove-Item -Recurse -Force $targetPath
}

# Luodaan uusi builds/päivä.kuukausi.vuosi
New-Item -ItemType Directory -Path $targetPath | Out-Null

#Palautetaan Kansio
Write-Output $targetPath