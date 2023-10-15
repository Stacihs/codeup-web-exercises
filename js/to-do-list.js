(() => {
"use strict";

// VARIABLES
const toDoList = document.querySelector("#to-do-list");
const addToDoBtn = document.querySelector("button.btn");

// FUNCTIONS
function addItem(event){
	event.preventDefault();
	const toDoItem = document.createElement("li");
	toDoItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
	const toDoItemPara = document.createElement("p");
	toDoItemPara.classList.add("m-0");
	toDoItemPara.innerText = document.querySelector("#to-do").value.toUpperCase();
	toDoItem.appendChild(toDoItemPara);
	const doneButton = document.createElement("button");
	doneButton.classList.add("btn", "btn-danger", "opacity-1-hover:hover");
	doneButton.innerText = "Done";
	toDoItem.appendChild(doneButton);
	toDoList.appendChild(toDoItem);
}

function deleteItem(event) {
	if(event.target.classList.contains("btn-danger")) {
		event.target.parentElement.remove();
	}
}


//EVENT LISTENERS
addToDoBtn.addEventListener("click", addItem);
toDoList.addEventListener("click", deleteItem)



})()