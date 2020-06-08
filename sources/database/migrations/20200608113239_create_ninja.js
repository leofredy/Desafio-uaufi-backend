
exports.up = function(knex) {
  return knex.schema.createTable('ninja', function(table) {
      table.increments()
      
      table.string('name').notNullable()
      table.string('email').unique()
      table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ninja')
};
