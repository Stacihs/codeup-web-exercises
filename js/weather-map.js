"use script";

mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map', style: 'mapbox://styles/mapbox/outdoors-v12', zoom: 10, center: [-98.491142, 29.424349]
})

// ********FOR CURRENT FORECAST***********
fetch(`https://api.openweathermap.org/data/2.5/weather?` + `id=4726206` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
	.then(data => data.json())
	.then(currentWeather => {
		console.log(currentWeather);
		console.log(currentWeather.dt);
		console.log(currentWeather.main.feels_like);
		console.log(wxIconURL + currentWeather.weather[0].icon + '.png');
		console.log(currentWeather.weather[0].description);
		console.log(currentWeather.main.humidity);
		console.log(currentWeather.wind.speed);
		console.log(currentWeather.main.pressure);
		convertDateTime(currentWeather.dt);
		displayCurrentTemp(currentWeather);
	});

// ***********FOR 5DAY FORECAST********
fetch(`https://api.openweathermap.org/data/2.5/forecast?` + `id=4726206` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
	.then(data => data.json())
	.then(forecast => {
		console.log(forecast);
		displayFiveDayForecast(forecast);
	});

// ********VARIABLES**********
const main = document.querySelector("main");
const mapSection = document.querySelector("#map-row");
const wxIconURL = `https://openweathermap.org/img/wn/`;



//**********FUNCTIONS***********
const displayCurrentTemp = (currentWeather) => {
	const dateTime = document.createElement("p");
	const tempHeader = document.createElement("h2");
	tempHeader.innerText = "Current Conditions";
	const currentTemp = document.createElement("h3");
	currentTemp.innerText = currentWeather.main.temp.toFixed(0);
	const description = document.createElement("p");
	description.innerText = currentWeather.weather.description;
	const tempSection = document.createElement("section");
	tempSection.classList.add("row", "card");
	tempSection.appendChild(tempHeader);
	tempHeader.insertAdjacentElement("afterend", currentTemp);
	main.insertBefore(tempSection, mapSection);
}

const displayFiveDayForecast = (forecast) => {
	forecast.list.forEach((day, index) => {
		if (index % 8 === 0) {
			const dailyTemp = day.main.temp.toFixed(0);
			const dateTime = day.dt;
			console.log(`${index}  ${dateTime} ${dailyTemp}`);
		}
	});
}

const convertDateTime = (dt) => {
	const timeStamp = dt;
	const milliseconds = timeStamp * 1000;
	const dateObject = new Date(milliseconds);
	const readableDate = dateObject.toLocaleString();
	console.log(readableDate);
}
