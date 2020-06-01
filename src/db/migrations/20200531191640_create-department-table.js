
exports.up = function(knex) {
  return knex.schema.createTable('department', function (table) {
    table.increments();
    table.integer('city_id').notNullable().references('city.id');
    table.string('address').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('department');
};
