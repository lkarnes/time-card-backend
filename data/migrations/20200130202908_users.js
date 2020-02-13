
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
      emp.string('phone_number');
      emp.integer('hourly_rate');
      emp.integer('company_id').unsigned().references('id').inTable('company').onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('timecard', tc => {
    tc.increments();
    tc.integer('employee_id').notNullable().unsigned().references('id').inTable('employee').onDelete('CASCADE').onUpdate('CASCADE');
    tc.integer('company_id').notNullable().unsigned().references('id').inTable('company').onDelete('CASCADE').onUpdate('CASCADE');
    tc.date('date').notNullable();
    tc.time('clock_on').notNullable();
    tc.time('clock_off').notNullable();
    tc.string('location', 224);








    0000000000
    tc.string('notes', 224);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('timecard').dropTableIfExists('employee').dropTableIfExists('company')
};
