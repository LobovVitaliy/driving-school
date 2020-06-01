const { EmployeeModel } = require('$src/db/models/employee');

class EmployeeService {
  static create(payload) {
    return EmployeeModel.create(payload);
  }

  static update(id, payload) {
    return EmployeeModel.update(id, payload);
  }

  static delete(id) {
    return EmployeeModel.delete(id);
  }

  static get(id) {
    return EmployeeModel.get(id);
  }

  static getAll(params = {}) {
    return EmployeeModel.getAll(params);
  }
}

module.exports = EmployeeService;