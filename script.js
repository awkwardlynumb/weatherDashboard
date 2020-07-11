//display temp, humidity, wind speed and uv index in top portion
//display 5 day forecast in bottom portion
//ask jj about 404 error
const apiKey = "6af3e9cb79cfccec5f936552226ac51d"
const basicURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $("#citySearch").val + "&appid=" + apiKey;
const fivedayURL = "api.openweathermap.org/data/2.5/forecast?q=" + "&appid=" + apiKey;
const UVURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat={lat}&lon={lon}"
$.ajax({
    url: basicURL,
    method: "GET"
  }).then(function(response) {
      console.log(basicURL)
      console.log(response)
})