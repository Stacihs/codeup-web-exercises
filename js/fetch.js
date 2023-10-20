(() => {
	"use strict";

	function lastGitHubCommit(username) {
		return fetch('https://api.github.com/users', {headers: {"Authorization": "token" + "GITHUB_API_KEY"}})
	}
}

// lastGitHubCommit(username).then(users => {
// 	// console.log(username.commit[0]);
//
// })
//
//
//
// })
// ();


// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})