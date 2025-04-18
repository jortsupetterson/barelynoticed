param ([Parameter(Mandatory = $true)] [string]$Destination);

$source = "src/App"

Wite-Host = "Kopioidaan $source -> $Destination" -ForegroundColor Blue

#Varmistetaan lähde kansion olemassa olo
if (-not (Test-Path $source)) {
    Write-Error "Lähdekansiota ei löydy: $source"
    exit 1
}

#Kopioidaan kaikki
Copy-Item -Path "$source\* -Destination -Recurse -Force"