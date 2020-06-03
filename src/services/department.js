const DepartmentModel = require('$src/db/models/department');

const Service = require('$src/services/service');

class DepartmentService extends Service {
  static model = DepartmentModel;

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