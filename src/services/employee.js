const EmployeeModel = require('$src/db/models/employee');

class EmployeeService {
  static create(payload) {
    return EmployeeModel.query().insert(payload);
  }

  static update(id, payload) {
    return EmployeeModel.query().patchAndFetchById(id, payload);
  }

  static delete(id) {
    return EmployeeModel.query().deleteById(id).returning('*');
  }

  static get(id) {
    return EmployeeModel.query()
      .modify('fields')
      .withGraphFetched('department(fields).city')
      .findById(id);
  }

  static getAll(params = {}) {
    return EmployeeModel.query()
      .modify('fields')
      .withGraphFetched('department(fields).city');
  }
}

module.exports = EmployeeService;