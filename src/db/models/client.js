const { Model } = require('objection');

class ClientModel extends Model {
  static tableName = 'client';
}

module.exports = ClientModel;