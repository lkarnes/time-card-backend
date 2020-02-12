const dbConnection = process.env.DATABASE_URL;
require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './data/database.db3'},
    migrations: {
      directory: 'data/migrations/'
    },
    seeds: {
      directory: './data/seeds/'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys=ON', done);
      }
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  }
};
