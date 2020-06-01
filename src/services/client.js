const ClientModel = require('$src/db/models/client');

const Service = require('$src/services/service');

class ClientService extends Service {
  static model = ClientModel;
}

module.exports = ClientService;