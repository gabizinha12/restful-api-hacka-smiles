
const snowJson = require('./mocks/destinations_snow.json')
const beachJson = require('destinations_beach.json')
const cityJson = require('destinations_city.json')
const montainsJson = require('destinations_mountains.json')

module.exports = {
  destinations(preference) {
    switch (preference) {
      case "neve":
        return snowJson;

      case "praia":
        return beachJson;

      case "cidade":
        return cityJson;

      case "montanha":
        return montainsJson;

      default:
        snowJson;
    }
  },
};

