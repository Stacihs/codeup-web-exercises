(() => {
	"use strict";

	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];

	const usersLanguages = users.filter(user => user.languages.length >= 3);
	console.log(usersLanguages);



	const usersEmail = users.map(user => user.email);
	console.log(usersEmail);


	const totalUsersYrsExperience = users.reduce((sumOfYrs,user) => {
		return sumOfYrs + user.yearsOfExperience;
	}, 0);
	console.log(totalUsersYrsExperience);
	const avgTotalUsersExperience = totalUsersYrsExperience / users.length;
	console.log(avgTotalUsersExperience);


	// const longestUserEmail = users.reduce((longestEmail, user) => {
	// 	if(user.email.length > longestEmail) {
	// 		return user.email;
	// 	}
	// 	return longestEmail;
	// }, users[0].email.length);
	// console.log(longestUserEmail);

	const longestUserEmail = users.reduce((longestEmail, user) => {
		if(user.email.length > longestEmail) {
			return user.email.length;
		}
		return longestEmail;
	}, 0);
	console.log(longestUserEmail);



	const usersNames = users.reduce((str, user) => {
		return  str + ' ' + user.name;
	}, "Your instructors are: ")
	console.log(usersNames);

//BONUS
// 	const uniqueUserLanguages = new Set();
// 	for (let i = 0; i < users.length; i++) {
// 		uniqueUserLanguages.add(users[i].languages);
// 	}
// 	console.log(uniqueUserLanguages);
})();