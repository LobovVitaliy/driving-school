const CRUD = require('$src/db/models/crud');

class Department {
  constructor(data) {
    this.id = data.id;
    this.city_id = data.city_id;
    this.address = data.address;
  }
}

class DepartmentModel extends CRUD {
  constructor() {
    super('department', Department);
  }
}

exports.Department = Department;

exports.DepartmentModel = new DepartmentModel();