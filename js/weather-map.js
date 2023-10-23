"use script";

mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/outdoors-v12',
	zoom: 10,
	center: [-98.491142, 29.424349]
})

// ********FOR CURRENT FORECAST***********
fetch(`https://api.openweathermap.org/data/2.5/weather?` +
	`id=4726206` +
	`&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
	.then(data => data.json())
	.then(currentWeather => {
		console.log(currentWeather);
		displayCurrentTemp(currentWeather);
	});
// ***********FOR 5DAY FORECAST********
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
	`id=4726206` +
	`&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
	.then(data => data.json())
	.then(forecast => console.log(forecast));


//**********FUNCTIONS***********
const displayCurrentTemp = (currentWeather) => {
	const map = document.querySelector("map");
	const currentTemp = document.createElement("h2");
	currentTemp.innerText = currentWeather.main.temp.toFixed(0);
	const main = document.querySelector("main");
	const tempSection = document.createElement("section");
	const mapSection = document.querySelector("#map-row");
	tempSection.classList.add("row");
	tempSection.appendChild(currentTemp);
	main.insertBefore(tempSection, mapSection);
}