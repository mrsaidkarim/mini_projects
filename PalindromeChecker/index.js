const input = document.getElementById("input")

function check()
{
	const val = input.value;
	
	var i = 0;
	var j = val.length - 1;
	while (i < j)
	{
		if (val[i] !== val[j])
		{
			alert("false")
			return 
		}
		i++;
		j--;
	}
	alert("true");
	input.value = "";
}