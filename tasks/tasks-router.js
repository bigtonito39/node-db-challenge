const express = require("express")

const model = require("./tasks-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
   try {
       const taskList = await model.finAndTasks()

    res.status(200).json(taskList)

   }catch(error){
       next(error)
   }
})

router.post("/", async (req, res, next) => {
    try {
        if (!req.body.project_id){
            res.status(500).json({message:"please include a project id"})
        }
        if (!req.body.actionItem){
            res.status(500).json({message: "Please include an action item"})
        } else{
            const newPost = await model.addTask(req.body)
            res.json(newPost)
        }

    }catch(error) {
        next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const taskById = await model.taskFinder(id)
        res.status(200).json(taskById)        
    }catch(error){
        next(error)
    }

})

router.delete("/:id", async (req, res, next) => {
    try{
        const {id} = req.params //same as const id = req.params.id
        const data = await model.deleteTask(id)
         if (data === 1){
             res.json({message:"Task has been deleted!"})
         }
         else res.json({message:"Invalid ID, Please provide a valid one"})

    
    } catch(error){
        next(error)
    }
})


module.exports = router;