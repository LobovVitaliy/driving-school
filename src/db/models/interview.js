const { Model } = require('objection');

const ClientModel = require('$src/db/models/client');
const EmployeeModel = require('$src/db/models/employee');

class InterviewModel extends Model {
  static tableName = 'interview';

  static get modifiers() {
    return {
      fields(builder) {
        builder.select('id', 'begin_date', 'end_date');
      },
    };
  }

  static relationMappings = {
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: ClientModel,
      join: {
        from: 'interview.client_id',
        to: 'client.id',
      },
    },
    instructor: {
      relation: Model.BelongsToOneRelation,
      modelClass: EmployeeModel,
      join: {
        from: 'interview.instructor_id',
        to: 'employee.id',
      },
    },
  };
}

module.exports = InterviewModel;