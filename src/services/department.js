const DepartmentModel = require('$src/db/models/department');

class DepartmentService {
  static create(payload) {
    return DepartmentModel.query().insert(payload);
  }

  static update(id, payload) {
    return DepartmentModel.query().patchAndFetchById(id, payload);
  }

  static delete(id) {
    return DepartmentModel.query().deleteById(id).returning('*');
  }

  static get(id) {
    return DepartmentModel.query()
      .modify('fields')
      .withGraphFetched('city')
      .findById(id);
  }

  static getAll(params = {}) {
    return DepartmentModel.query()
      .modify('fields')
      .withGraphFetched('city');
  }
}

module.exports = DepartmentService;