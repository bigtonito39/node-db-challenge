const db = require("../data/config")

function finAndTasks () {
    return db("task as t")
    .join("projects as p", "p.id", "t.project_id")
    .select("t.actionItem as Task ActionItem", "t.notes as task notes", "t.completed as task completed",
    "p.name as project name", "p.description as project description")
}

function taskFinder(id) {
    return db("task").where({id}).first()
}

async function addTask(data){
    try {
        const [id] = await db("task").insert(data)
        return taskFinder(id)
    }catch {
        return {message: "New post did not get created"}
    }
}

function deleteTask(id) {
    return db("task").where({id}).del()
}


module.exports = {
    finAndTasks,
    taskFinder,
    addTask,
    deleteTask
}