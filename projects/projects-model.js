const db = require ("../data/config")

function projectFinder (id) {
    return db("projects")
}

async function addProject (newProject) {
    try{
        const [id] = await db("projects").insert(newProject)
        return projectFinder()
    } catch (error) {
      return error
    }

}

function findProject(id){
    return db("projects").where({id}).first()
}

module.exports = {
    projectFinder,
    addProject,
    findProject
}