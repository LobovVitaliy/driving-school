const { badRequest } = require('@hapi/boom');

const DepartmentService = require('$src/services/department');

module.exports = [
  {
    method: 'POST',
    path: '/departments',
    handler: function (request, h) {
      return DepartmentService.create(request.payload).catch(badRequest);
    },
  },
  {
    method: 'PUT',
    path: '/departments/{id}',
    handler: function (request, h) {
      return DepartmentService.update(request.params.id, request.payload).catch(badRequest);
    },
  },
  {
    method: 'DELETE',
    path: '/departments/{id}',
    handler: function (request, h) {
      return DepartmentService.delete(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/departments/{id}',
    handler: function (request, h) {
      return DepartmentService.get(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/departments',
    handler: function (request, h) {
      return DepartmentService.getAll(request.query).catch(badRequest);
    },
  },
];