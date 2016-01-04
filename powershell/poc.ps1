# .\poc.ps1 C:\Projetos\powershell\
param($rootPath)
. "$rootpath\QuickGuideFunctions.ps1" $rootPath
. "$rootpath\loadconfig.ps1" $rootPath



 $config = Get-Configuration
 Write-Host $config.rootPath
 Write-Host $config.archivePath
 
 (get-linewithtextinfile .\log.txt "bmw_quickguide_x5_x6_en.pdf")
 $fileline = (get-linewithtextinfile .\log.txt "bmw_quickguide_x5_x6_en.pdf")

 (get-datefromquickguide $fileline).toshortdatestring()	





