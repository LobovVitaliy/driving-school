const ClientModel = require('$src/db/models/client');

const Service = require('$src/services/service');

class ClientService extends Service {}

function createClientService(model) {
  return new ClientService(model);
}

exports.createClientService = createClientService;

exports.ClientService = createClientService(ClientModel);