(() => {
"use strict";

// VARIABLES
const btn = document.querySelector("button");
const parkFacts = document.querySelectorAll(".park-facts");
const parkNames = document.querySelectorAll(".park-name");


// FUNCTIONS
function changeLastFact() {
	for (const parkFact of parkFacts) {
		parkFact.lastElementChild.style.backgroundColor = "yellow";
	}
}

function changeToBold() {
	for (const parkName of parkNames) {
		const factsChildren = this.nextElementSibling.children;
		for (const factsChild of factsChildren) {
			factsChild.style.fontWeight = "bold";
		}
	}
}

function changeFirstFact() {
	for (const parkFact of parkFacts)  {
		const firstFact = this.firstElementChild;
		firstFact.style.color = "blue";
	}
}


// EVENT LISTENERS
btn.addEventListener("click", changeLastFact);

parkNames.forEach(parkName => {
	parkName.addEventListener("click", changeToBold);
});

parkFacts.forEach(parkFact => {
	parkFact.addEventListener("click", changeFirstFact);
});



})();





