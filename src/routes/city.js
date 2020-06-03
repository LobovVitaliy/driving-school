const { badRequest } = require('@hapi/boom');

const { CityService } = require('$src/services/city');

module.exports = [
  {
    method: 'POST',
    path: '/cities',
    handler: function (request, h) {
      return CityService.create(request.payload).catch(badRequest);
    },
  },
  {
    method: 'PUT',
    path: '/cities/{id}',
    handler: function (request, h) {
      return CityService.update(request.params.id, request.payload).catch(badRequest);
    },
  },
  {
    method: 'DELETE',
    path: '/cities/{id}',
    handler: function (request, h) {
      return CityService.delete(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/cities/{id}',
    handler: function (request, h) {
      return CityService.get(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/cities',
    handler: function (request, h) {
      return CityService.getAll(request.query).catch(badRequest);
    },
  },
];