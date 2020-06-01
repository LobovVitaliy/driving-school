const config = require('$src/configs/db');
const knex = require('knex')(config);

module.exports = knex;