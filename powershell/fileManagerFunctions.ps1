function Get-LineWithTextInFile
{
	param($filePath, $text)
	return (select-string -path $filePath -pattern $text).Line
}

function Get-Files
{
	param($path)
	Get-ChildItem -path $path 
}

function Check-FileCreatedOn
{
	param($file, $date)
	return $file.CreationTime.Date -eq $date.Date	
}