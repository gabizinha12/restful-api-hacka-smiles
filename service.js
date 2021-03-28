
const snowJson = require('./mocks/destinations_snow.json')

module.exports = {
  destinations(preference) {
    switch (preference) {
      case "neve":
        return snowJson;

      case "praia":
        return snowJson;

      case "cidade":
        return snowJson;
      case "montanha":
        return snowJson;
      default:
        break;
    }
  },
};

