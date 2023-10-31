"use strict";

import {randomGreeting} from "./greeting-logic.js";

const input = document.querySelector("input");

input.addEventListener('keypress', (event) => {
	let firstName = input.value;
	const welcome = document.querySelector("p");
	let greeting = randomGreeting();
	if (event.code === "Enter") {
		event.preventDefault();
		welcome.innerText = `${greeting} ${firstName}`;
	}
});