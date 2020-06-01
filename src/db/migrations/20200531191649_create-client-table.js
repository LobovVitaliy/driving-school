
exports.up = function(knex) {
  return knex.schema.createTable('client', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('gender').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('client');
};
