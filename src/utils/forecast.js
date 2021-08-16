const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d650f1f372bf6f9420c00be59afffda6&query" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          "It is currently" +
          body.current.temperature +
          " degrees out. There is a" +
          body.current.precipProbability +
          " chance of rain."
      );
    }
  });
};

module.exports = forecast;
