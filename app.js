const forecast = require("./utils/forecast");
const geoCode = require("./utils/geoCode");

// eslint-disable-next-line no-undef
const address = process.argv[2];

if (!address) console.log("Please provide a valid address.");
else {
  geoCode(address, (error, { latitude, longitude }) => {
    if (error) return console.log(error);
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) return console.log(error);
      console.log(forecastData);
    });
  });
}
