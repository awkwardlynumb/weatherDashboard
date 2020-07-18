//display temp, humidity, wind speed and uv index in top portion
//display 5 day forecast in bottom portion
//ask jj about 404 error
const apiKey = "6af3e9cb79cfccec5f936552226ac51d";

const ajaxCall = function (url) {
  return $.ajax({
    url: url,
    method: "GET",
  }).then(function (response) {
    console.log(url, response);
    return response;
  });
};

const basicSearch = async function () {
  const basicURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    $("#citySearch").val() +
    "&appid=" +
    apiKey + "&units=imperial";
  const basicData = await ajaxCall(basicURL);
  $("#basicData").append("<p>Temperature: " + basicData.main.temp + "</p>");
  $("#basicData").append("<p>Humidity: " + basicData.main.humidity + "%</p>");
  $("#basicData").append("<p>Wind Speed: " + basicData.wind.speed + "mph </p>");
  uvSearch(basicData);
  fiveDaySearch();
  console.log("basicData", basicData);
};

const uvSearch = async function (basicData) {
  const UVURL =
    "https://api.openweathermap.org/data/2.5/uvi?appid=" +
    apiKey +
    "&lat=" + basicData.coord.lat +"&lon=" + basicData.coord.lon;
  const UVData = await ajaxCall(UVURL);
  console.log({UVURL}, {UVData});
  $("#basicData").append("<p>UV Index: " + UVData.value + "</p>");
};

const fiveDaySearch = async function () {
  const fivedayURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    $("#citySearch").val() +
    "&appid=" +
    apiKey + "&units=imperial";
  const fiveDayData = await ajaxCall(fivedayURL);
  for (let i = 2; i < 35; i+=8) {
    const fiveDayCard = $("<div>")
    const fiveDayIcon = $("<img>")
    fiveDayIcon.attr("src", "http://openweathermap.org/img/wn/" + fiveDayData.list[i].weather[0].icon)
    fiveDayCard.append(fiveDayIcon);
    fiveDayCard.attr("class", "col")
    $("#fiveDay").append(fiveDayCard); 
  }
};

$("#search").on("submit", function(event){
    event.preventDefault();
    basicSearch();
});