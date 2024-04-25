const quoteElement = document.getElementById("quote");
const quotes = [
	"The only way to do great work is to love what you do.",
	"In the end, it's not the years in your life that count. It's the life in your years.",
	"The greatest glory in living lies not in never falling, but in rising every time we fall.",
	"Success is not final, failure is not fatal: It is the courage to continue that counts.",
	"Believe you can and you're halfway there.",
	"The future belongs to those who believe in the beauty of their dreams.",
	"It does not matter how slowly you go as long as you do not stop.",
	"The only limit to our realization of tomorrow will be our doubts of today.",
	"Life is 10% what happens to us and 90% how we react to it.",
	"The best way to predict the future is to create it."
	]
const usedIndexes = new Set();
function check()
{
	if (usedIndexes.size >= quotes.length)
		usedIndexes.clear();
	while (true)
	{
		const random_nbr = Math.floor(Math.random() * 10);
		if (usedIndexes.has(random_nbr))	continue;
		usedIndexes.add(random_nbr);
		quoteElement.innerHTML = quotes[random_nbr];
		random_nbr = Math.floor(Math.random() * 10)
		break;
	}
	
}