// Update with your config settings.
const dbConnection = process.env.DATABASE_URL;
require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {

  development: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      tableName: './data/migrations/'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      tableName: './data/migrations/'
    }
  }

};
