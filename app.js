const express = require("express");
const https = require("https");


const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=e47231e40e89c2d57f0d63a468548c4d";

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL =  "http://openweathermap.org/img/wn/" + icon + "10@2x.png"
      res.write("<p>The weather is currently " + weatherDescription + "<p>");
      res.write("<h1>The temperature is Dahaka " + temp + " degress Celcius.</h1>");
      res.write("<img src =" + imageURL + ">")
      res.send();
    })
  })
})


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
