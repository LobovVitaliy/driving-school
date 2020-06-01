const { Model } = require('objection');

const CityModel = require('$src/db/models/city');

class DepartmentModel extends Model {
  static tableName = 'department';

  static get modifiers() {
    return {
      fields(builder) {
        builder.select('id', 'address');
      },
    };
  }

  static relationMappings = {
    city: {
      relation: Model.BelongsToOneRelation,
      modelClass: CityModel,
      join: {
        from: 'department.city_id',
        to: 'city.id',
      },
    },
  };
}

module.exports = DepartmentModel;