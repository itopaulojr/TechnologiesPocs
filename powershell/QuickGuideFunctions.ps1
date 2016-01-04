param($rootPath)

. "$rootpath\dateFunctions.ps1"
. "$rootpath\fileManagerFunctions.ps1"	

function Get-MonthAsTextFromQuickGuide
{
	param($fileLine)
	($fileLine).substring(34,3)	
}

function Get-DayFromQuickGuide
{
	param($fileLine)
	($fileLine).substring(38,2)	
}

function Get-YearFromQuickGuide
{
	param($fileLine)
	($fileLine).substring(42,4)	
}

function Get-DateFromQuickGuide
{
	param($fileLine)
	
	$year = Get-YearFromQuickGuide $fileLine
	$month = Get-MonthFromMonthAsText (Get-MonthAsTextFromQuickGuide $fileLine)
	$day = Get-DayFromQuickGuide $fileLine
	
	return (get-date -year $year -day $day -month $month).Date	
}

function Get-QuickGuideTextLineFromFTPOutputFile
{
	param($ftpoutputFilePath)
	$fileLine = (Get-LineWithTextInFile $ftpoutputFilePath "BMW_Quickguide_X5_X6_en.pdf")
}