// const	input = document.getElementById("input");
// const	items = document.getElementById("items");

// function addItem()
// {
// 	if (input.value)
// 	{
// 		items.innerHTML += `<li>${input.value}</li>`;
// 		// alert(input.value);
// 		input.value = null;
// 	}
// }


// function renderItems() {
//     itemsDiv.innerHTML = null;

//     for (const [idx, item] of Object.entries(items)) {
//         const container = document.createElement("div")
//         container.style.marginBottom = "10px"
        
//         const text = document.createElement("p")
//         text.style.display = "inline"
//         text.style.marginRight = "10px"
//         text.textContent = item;

//         const button = document.createElement("button")
//         button.textContent = "Delete"
//         button.onclick = () => removeItem(idx)

//         container.appendChild(text)
//         container.appendChild(button)
        
//         itemsDiv.appendChild(container)
//     }
// }

const	input = document.getElementById("input");
const	container = document.getElementById("items");
let	items = [];

function removeItem(index)
{
	items.splice(index, 1);
	renderItems();
	saveItem();
}
function renderItems()
{
	container.innerHTML = null;
	for(const [index, item] of Object.entries(items))
	{
		const div = document.createElement("div");
		div.style.marginBottom = "10px";

		const text = document.createElement("p");
		text.style.display = "inline";
		text.style.marginRight = "10px";
		text.textContent = item;

		const button = document.createElement("button");
		button.textContent = "Delete";
		button.onclick = () => removeItem(index);

		div.appendChild(text);
		div.appendChild(button);

		container.appendChild(div);
	}
}
function saveItem()
{
	const stringItmes = JSON.stringify(items);
	localStorage.setItem("items", stringItmes);
}

function loadItems()
{
	const	itemsGotten = localStorage.getItem("items");
	if (itemsGotten)
		items = JSON.parse(itemsGotten);
	renderItems();
}
function addItem()
{
	const value = input.value;
	if (!value)
	{
		alert("You cannot add an empty item");
		return ;
	}
	items.push(value);
	renderItems();
	input.value = "";
	saveItem();
}
document.addEventListener("DOMContentLoaded", loadItems);