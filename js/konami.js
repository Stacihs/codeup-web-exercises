(() => {
	"use strict";

	const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', "Enter"];
	const page = document.querySelector("body");
	const originalHeader = document.querySelector("#code");
	const userCode = [];
	const userAlert = document.querySelector("#lives");


	page.addEventListener("keyup", function (event) {
		userCode.push(event.key);
		if (JSON.stringify(userCode) === (JSON.stringify(konamiCode))) {
			originalHeader.classList.add("hidden");
			userAlert.classList.remove("hidden");
		}
	})

	document.addEventListener("keyup", event => console.log(event.key));
})();