const { badRequest } = require('@hapi/boom');

const ClientService = require('$src/services/client');

module.exports = [
  {
    method: 'POST',
    path: '/clients',
    handler: function (request, h) {
      return ClientService.create(request.payload).catch(badRequest);
    },
  },
  {
    method: 'PUT',
    path: '/clients/{id}',
    handler: function (request, h) {
      return ClientService.update(request.params.id, request.payload).catch(badRequest);
    },
  },
  {
    method: 'DELETE',
    path: '/clients/{id}',
    handler: function (request, h) {
      return ClientService.delete(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/clients/{id}',
    handler: function (request, h) {
      return ClientService.get(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/clients',
    handler: function (request, h) {
      return ClientService.getAll(request.query).catch(badRequest);
    },
  },
];