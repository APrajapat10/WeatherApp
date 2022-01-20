const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2e3cf427501f49abe82ed2fcf3f4f5c4`;
  request({ url, json: true }, (error, { body }) => {
    if (error) callback(`Unable to connect to the weather service!`);
    else if (body.error) callback(`Unable to find location.`, undefined);
    else
      callback(
        undefined,
        `Location:${body.name}
Weather: ${body.weather[0].description}. Current temperature is ${body.main.temp} K and the pressure is ${body.main.pressure} hPa`
      );
  });
};
module.exports = forecast;
