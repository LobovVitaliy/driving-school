const { badRequest } = require('@hapi/boom');

const EmployeeService = require('$src/services/employee');

module.exports = [
  {
    method: 'POST',
    path: '/employees',
    handler: function (request, h) {
      return EmployeeService.create(request.payload).catch(badRequest);
    },
  },
  {
    method: 'PUT',
    path: '/employees/{id}',
    handler: function (request, h) {
      return EmployeeService.update(request.params.id, request.payload).catch(badRequest);
    },
  },
  {
    method: 'DELETE',
    path: '/employees/{id}',
    handler: function (request, h) {
      return EmployeeService.delete(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/employees/{id}',
    handler: function (request, h) {
      return EmployeeService.get(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/employees',
    handler: function (request, h) {
      return EmployeeService.getAll(request.query).catch(badRequest);
    },
  },
];