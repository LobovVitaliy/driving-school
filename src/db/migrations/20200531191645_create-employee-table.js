
exports.up = function(knex) {
  return knex.schema.createTable('employee', function (table) {
    table.increments();
    table.integer('department_id').notNullable().references('department.id');
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.integer('position').notNullable();
    table.string('password').notNullable();
    table.string('number').notNullable();
    table.integer('age').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('employee');
};
