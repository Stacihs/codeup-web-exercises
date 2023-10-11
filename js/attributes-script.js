// VARIABLES
const profilePic = document.querySelector('#profile-pic');
const profileName = document.querySelector('#profile-name');
const profileDesc = document.querySelector('#profile-desc');
const profileCard = document.querySelector('#profile-card');

const intervalPicId = setTimeout(changeProfilePic, 2000);
const intervalNameId = setTimeout(changeProfileName, 4000);
const timeOutID = setTimeout(changeDescription, 6000);
const intervalCardId = setInterval(changeCardBackground, 2000);


//FUNCTIONS
function changeProfilePic () {
    profilePic.src = "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
}
function changeProfileName() {
    profileName.innerHTML = "Jane Doe";
}

function changeDescription() {
    profileDesc.classList.add('desc-style');
}

function changeCardBackground() {
    profileCard.classList.toggle('background-color');
}



// use set timeout

// Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval

