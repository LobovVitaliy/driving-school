const DepartmentModel = require('$src/db/models/department');

const Service = require('$src/services/service');

class DepartmentService extends Service {
  get(id) {
    return this.model.query()
      .modify('fields')
      .withGraphFetched('city')
      .findById(id);
  }

  getAll(params = {}) {
    return this.model.query()
      .modify('fields')
      .withGraphFetched('city');
  }
}

function createDepartmentService(model) {
  return new DepartmentService(model);
}

exports.createDepartmentService = createDepartmentService;

exports.DepartmentService = createDepartmentService(DepartmentModel);