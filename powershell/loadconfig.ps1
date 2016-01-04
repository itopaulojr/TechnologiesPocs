 param($rootPath)
 
 function Get-Configuration
 {
	return Get-Content -Raw -Path $rootPath\config.json | ConvertFrom-Json
 }
 