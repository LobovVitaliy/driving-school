const EmployeeModel = require('$src/db/models/employee');

const Service = require('$src/services/service');

class EmployeeService extends Service {
  get(id) {
    return this.model.query()
      .modify('fields')
      .withGraphFetched('department(fields).city')
      .findById(id);
  }

  getAll(params = {}) {
    return this.model.query()
      .modify('fields')
      .withGraphFetched('department(fields).city');
  }
}

function createEmployeeService(model) {
  return new EmployeeService(model);
}

exports.createEmployeeService = createEmployeeService;

exports.EmployeeService = createEmployeeService(EmployeeModel);