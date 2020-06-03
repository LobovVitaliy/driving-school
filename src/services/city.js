const CityModel = require('$src/db/models/city');

const Service = require('$src/services/service');

class CityService extends Service {
  static model = CityModel;
}

module.exports = CityService;