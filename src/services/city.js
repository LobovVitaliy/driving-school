const CityModel = require('$src/db/models/city');

const Service = require('$src/services/service');

class CityService extends Service {}

function createCityService(model) {
  return new CityService(model);
}

exports.createCityService = createCityService;

exports.CityService = createCityService(CityModel);