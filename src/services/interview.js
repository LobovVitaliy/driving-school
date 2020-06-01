const InterviewModel = require('$src/db/models/interview');

const Service = require('$src/services/service');

class InterviewService extends Service {
  static model = InterviewModel;

  static get(id) {
    return InterviewModel.query()
      .modify('fields')
      .withGraphFetched('client')
      .withGraphFetched('instructor(fields).department(fields).city')
      .findById(id);
  }

  static getAll(params = {}) {
    return InterviewModel.query()
      .modify('fields')
      .withGraphFetched('client')
      .withGraphFetched('instructor(fields).department(fields).city');
  }
}

module.exports = InterviewService;