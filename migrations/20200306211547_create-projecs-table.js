exports.up =  async function(knex) {
    await knex.schema.createTable("projects", (table) =>{
      //1 project has many resources and task - so one to many relationship here
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed").defaultTo(false)
    })
    //many to many relationship here, as as projects can have multiple resources, but the same resource can be used in multiple projects
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
      //belong to a single project (fore)
      table.integer("project_id")
      .notNull()
      .unsigned() // get in the habbit in adding usigned() to foreigh keys as some sql programs might require it
      .references("id")
      .inTable("projects")
       //add the folliwing line so that a project gets deleted the task does as well
      .onUpdate("CASCADE") 
      .onDelete("CASCADE") 

  
    })
   //past this point i will be creating tables to relate Foreign keys between projects and resources as they have a many to many relationship.
 await knex.schema.createTable("projects_resources", (table) => {
     table.increments("id")
     table.integer("project_id").notNull()
     .references("id")
     .inTable("projects")
     .onUpdate("CASCADE")
     .onDelete("CASCADE")

     table.integer("resource_id").notNull()
     .references("id")
     .inTable("projects")
     .onUpdate("CASCADE")
     .onDelete("CASCADE")

 })

  };
  
  exports.down = async function(knex) {
    //this has to be located int he oposite site of how is on top
      await knex.schema.dropTableIfExists("projects_resources")
      await knex.schema.dropTableIfExists("task")
      await knex.schema.dropTableIfExists("resource")
      await knex.schema.dropTableIfExists("projects")
  };
  
            
