import randomNumber from "./number-utils.js";

"use strict";

const greetings =
	[
		"Hello",
		"Hi",
		"Hey there",
		"Greetings",
		"Salutations",
		"Howdy",
		"Yo",
		"Bonjour",
		"Hola",
		"Ciao",
		"Namaste",
		"G'day",
		"What's up",
		"Sup",
		"How's it going",
		"Nice to meet you",
		"Welcome",
		"Hey",
		"How are you",
		"Pleased to meet you"
	];

 const randomGreeting = () => {
	 let randomNum =  randomNumber(0, greetings.length-1);
	 return greetings[randomNum];
}

export { randomGreeting };