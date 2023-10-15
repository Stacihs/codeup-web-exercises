(() => {
	"use strict";

	const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
	const body = document.querySelector("body");
	const userCode = [];

	body.addEventListener("keyup", function (event) {
		userCode.push(event.key);
		if (JSON.stringify(userCode) === JSON.stringify(konamiCode)) {
			alert("You have added 30 lives!!!!");
		}
	})


	document.addEventListener("keyup", event => console.log(event.key));
})();