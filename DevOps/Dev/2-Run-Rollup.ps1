# DevOps/Run-Rollup.ps1

param ([Parameter(Mandaatory = $true)] [string]$ConfigPath)

Write-Host "Ajetaan Rollup-konfiguraatio: " -NoNewline
Write-Host "$ConfigPath" -ForegroundColor Blue

#Suoritetaan rollup
rollup -c $ConfigPath