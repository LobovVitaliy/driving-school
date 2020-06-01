const CityModel = require('$src/db/models/city');

class CityService {
  static create(payload) {
    return CityModel.create(payload);
  }

  static update(id, payload) {
    return CityModel.update(id, payload);
  }

  static delete(id) {
    return CityModel.delete(id);
  }

  static get(id) {
    return CityModel.get(id);
  }

  static getAll(params = {}) {
    return CityModel.getAll(params);
  }
}

module.exports = CityService;