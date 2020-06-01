const CRUD = require('$src/db/models/crud');

class Employee {
  constructor(data) {
    this.id = data.id;
    this.department_id = data.department_id;
    this.name = data.name;
    this.phone = data.phone;
    this.position = data.position;
    this.password = data.password;
    this.number = data.number;
    this.age = data.age;
  }
}

class EmployeeModel extends CRUD {
  constructor() {
    super('employee', Employee);
  }
}

exports.Employee = Employee;

exports.EmployeeModel = new EmployeeModel();