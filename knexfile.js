// Update with your config settings.
const dbConnection = process.env.DATABASE_URL

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {filename: './data/database.db3'},
    migrations: {
      directory: './data/migrations/'
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
