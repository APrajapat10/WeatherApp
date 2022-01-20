const request = require("request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYXByYWphcGF0MTAiLCJhIjoiY2toNjh1d2ZiMDJzczJxcDYwY3BxajNkayJ9.PSmmkOH8iKjx7KQzAKsKXQ&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) callback(`Unable to connect to MapBox!`, undefined);
    else if (body.features.length === 0)
      callback("Unable to find the co-ordinates.", undefined);
    else
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
      });
  });
};

module.exports = geoCode;
