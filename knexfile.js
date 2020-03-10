// Update with your config settings.

module.exports = {

  development: {
    
    client: 'sqlite3',
    connection: {
      filename: './data/project.db3'
    },
    useNullAsDefault: true, // A flag required for SQLite

    //make sure to include pool code if you are running a foreing key in you db
    pool:{
      afterCreate: (conn, done) => {
        //runs after a conection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); //turn 
      }
    }
  },

};
