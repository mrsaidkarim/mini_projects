const body = document.getElementsByTagName("body")[0];

function SetColor(color)
{
	if (color == "random")
	{
		const green = Math.round(Math.random() * 255);
		const red = Math.round(Math.random() * 255);
		const blue = Math.round(Math.random() * 255);
		body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	}
	else
		body.style.backgroundColor = color;
}