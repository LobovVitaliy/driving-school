const { Model } = require('objection');

const DepartmentModel = require('$src/db/models/department');

class EmployeeModel extends Model {
  static tableName = 'employee';

  static get modifiers() {
    return {
      fields(builder) {
        builder.select('id', 'name', 'phone', 'position', 'password', 'number', 'age');
      },
    };
  }

  static relationMappings = {
    department: {
      relation: Model.BelongsToOneRelation,
      modelClass: DepartmentModel,
      join: {
        from: 'employee.department_id',
        to: 'department.id',
      },
    },
  };
}

module.exports = EmployeeModel;