
exports.up = function(knex) {
  return knex.schema.createTable('company', comp=> {
      comp.increments();
      comp.string('company_name', 128).unique().notNullable();
      comp.string('password').notNullable();
      comp.string('field', 128).notNullable();
  })
  .createTable('employee', emp => {
      emp.increments();
      emp.string('name',224).notNullable();
      emp.string('job_title', 128).notNullable();
      emp.string('password').notNullable();
      emp.string('email',224).unique().notNullable();
      emp.integer('phone_number', 20);
      emp.integer('hourly_rate');
      emp.string('company_id').unsigned().references('company_id').inTable('company').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('employee').dropTableIfExists('company')
};
