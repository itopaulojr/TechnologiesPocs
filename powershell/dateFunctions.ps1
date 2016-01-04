function Get-MonthFromMonthAsText
{
	param($monthAsText)
	$monthsAsText = @("Jan"	,"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
	
	for($i=0; $i -lt 12; $i++)
	{
		if($monthsAsText[$i] -eq $monthAsText)
		{			
			return $i + 1
		}
	}
	return 0
}