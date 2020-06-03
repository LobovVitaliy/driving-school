const EmployeeModel = require('$src/db/models/employee');

const Service = require('$src/services/service');

class EmployeeService extends Service {
  static model = EmployeeModel;

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