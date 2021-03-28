
const snowJson = require('./mocks/destinations_snow.json')
const beachJson = require('./mocks/destinations_beach.json')
const cityJson = require('./mocks/destinations_city.json')
const montainsJson = require('./mocks/destinations_mountains.json')

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
        return snowJson;
    }
  },
};

