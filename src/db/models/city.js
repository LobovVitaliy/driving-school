const { Model } = require('objection');

class CityModel extends Model {
  static tableName = 'city';
}

module.exports = CityModel;