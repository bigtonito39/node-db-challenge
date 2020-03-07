// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true, // A flag required for SQLite
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

};
