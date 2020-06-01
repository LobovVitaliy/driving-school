
exports.up = function(knex) {
  return knex.schema.createTable('lesson', function (table) {
    table.increments();
    table.integer('client_id').notNullable().references('client.id');
    table.integer('instructor_id').notNullable().references('employee.id');
    table.datetime('begin_date').notNullable();
    table.datetime('end_date').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lesson');
};
