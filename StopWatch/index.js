let	seconds = 0;
const	time = document.getElementById("time");

function setTime()
{
	const	min = Math.floor(seconds / 60);
	const	sec = seconds % 60;
	time.innerHTML = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function timer()
{
	seconds++;
	setTime();
}
function startClock()
{
	interval = setInterval(timer, 1000);
}

function stopClock()
{
	clearInterval(interval);
}

function resetClock()
{
	stopClock();
	seconds = 0;
	setTime();
}