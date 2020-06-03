const { badRequest } = require('@hapi/boom');

const InterviewService = require('$src/services/interview');

module.exports = [
  {
    method: 'POST',
    path: '/interviews',
    handler: function (request, h) {
      return InterviewService.create(request.payload).catch(badRequest);
    },
  },
  {
    method: 'PUT',
    path: '/interviews/{id}',
    handler: function (request, h) {
      return InterviewService.update(request.params.id, request.payload).catch(badRequest);
    },
  },
  {
    method: 'DELETE',
    path: '/interviews/{id}',
    handler: function (request, h) {
      return InterviewService.delete(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/interviews/{id}',
    handler: function (request, h) {
      return InterviewService.get(request.params.id).catch(badRequest);
    },
  },
  {
    method: 'GET',
    path: '/interviews',
    handler: function (request, h) {
      return InterviewService.getAll(request.query).catch(badRequest);
    },
  },
];