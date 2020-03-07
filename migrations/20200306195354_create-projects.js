            
exports.up =  async function(knex) {
  await knex.schema.createTable("projects", (table) =>{
      table.increments("id")
      table.text("name").notNull()
  })
};

exports.down = function(knex) {
  
};
