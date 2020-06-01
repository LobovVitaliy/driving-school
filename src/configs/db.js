module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'driving-school',
    user: 'postgres',
    password: '',
  },
  migrations: {
    directory: '../db/migrations',
    tableName: 'migrations',
  },
};