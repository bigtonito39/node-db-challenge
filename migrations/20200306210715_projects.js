exports.up =  async function(knex) {
    await knex.schema.createTable("projects", (table) =>{
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed").defaultTo(false)
    })
    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
  
    })
    await knex.schema.createTable("task",(table) => {
      table.increments("id")
      table.text("actionItem").notNull()
      table.text("notes")
      table.boolean("completed").defaultTo(false)
      //here, i will be relating a task to a single project, as task only can
      //belong to a single project
      table.integer("project_id")
      .references("id")
      .inTable("projects")
       //add the folliwing line so that a project gets deleted, the task does as well
      .onUpdate("CASCADE") 
      .onDelete("CASCADE") 

  
    })
   //past this point i will be creating tables to relate Foreign keys
  };
  
  exports.down = async function(knex) {
    //this has to be located int he oposite site of how is on top
      
      await knex.schema.dropTableIfExists("task")
      await knex.schema.dropTableIfExists("resource")
      await knex.schema.dropTableIfExists("projects")
  };
  