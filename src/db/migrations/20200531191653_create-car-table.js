
exports.up = function(knex) {
  return knex.schema.createTable('car', function (table) {
    table.increments();
    table.integer('instructor_id').notNullable().references('employee.id');
    table.string('number').notNullable();
    table.integer('status').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('car');
};
