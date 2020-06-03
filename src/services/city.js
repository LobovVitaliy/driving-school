const CityModel = require('$src/db/models/city');

class CityService {
  static create(payload) {
    return CityModel.query().insert(payload);
  }

  static update(id, payload) {
    return CityModel.query().patchAndFetchById(id, payload);
  }

  static delete(id) {
    return CityModel.query().deleteById(id).returning('*');
  }

  static get(id) {
    return CityModel.query().findById(id);
  }

  static getAll(params = {}) {
    return CityModel.query();
  }
}

module.exports = CityService;