const CRUD = require('$src/db/models/crud');

class City {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}

class CityModel extends CRUD {
  constructor() {
    super('city', City);
  }
}

exports.City = City;

exports.CityModel = new CityModel();