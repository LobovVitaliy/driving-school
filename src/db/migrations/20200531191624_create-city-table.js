
exports.up = function(knex) {
  return knex.schema.createTable('city', function (table) {
    table.increments();
    table.string('name').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('city');
};
