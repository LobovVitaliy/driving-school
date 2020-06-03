const InterviewModel = require('$src/db/models/interview');

const Service = require('$src/services/service');

class InterviewService extends Service {
  get(id) {
    return this.model.query()
      .modify('fields')
      .withGraphFetched('client')
      .withGraphFetched('instructor(fields).department(fields).city')
      .findById(id);
  }

  getAll(params = {}) {
    return this.model.query()
      .modify('fields')
      .withGraphFetched('client')
      .withGraphFetched('instructor(fields).department(fields).city');
  }
}

function createInterviewService(model) {
  return new InterviewService(model);
}

exports.createInterviewService = createInterviewService;

exports.InterviewService = createInterviewService(InterviewModel);