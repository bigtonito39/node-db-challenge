const db = require("../data/config")

function getAllResources() {
    return db("resource")
}

function findResourceById(id) {
 return db("resource").where({id}).first()
}

async function addResource (newResource) {
    try{

        const [id] = await db("resource").insert(newResource)
        return findResourceById(id)

    }catch{
        return {message:"Resource could not be added"}
    }
}

module.exports = {
    getAllResources,
    findResourceById,
    addResource
}