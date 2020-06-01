const { DepartmentModel } = require('$src/db/models/department');

class DepartmentService {
  static create(payload) {
    return DepartmentModel.create(payload);
  }

  static update(id, payload) {
    return DepartmentModel.update(id, payload);
  }

  static delete(id) {
    return DepartmentModel.delete(id);
  }

  static get(id) {
    return DepartmentModel.get(id);
  }

  static getAll(params = {}) {
    return DepartmentModel.getAll(params);
  }
}

module.exports = DepartmentService;