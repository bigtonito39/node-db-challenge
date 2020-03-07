            
exports.up =  async function(knex) {
  await knex.schema.createTable("projects", (table) =>{
      table.increments("id")
      table.text("name").notNull()
      table.text("description")
      table.boolean("completed").defaultTo(false)
  })
};

exports.down = function(knex) {
  
};
