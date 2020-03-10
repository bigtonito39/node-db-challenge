const express = require("express")
const models = require ("./projects-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const listOfProjects = await models.projectFinder()
        res.status(200).json(listOfProjects)
    }catch(err){
        next(err)
    }
})
//post a new Project and shows a full list of projects along.
router.post("/", async (req, res, next) => {
    try {
       
        const newPost = await models.addProject(req.body)
        
        res.status(201).json(newPost)


    }catch (err){
        next(err)
    }
})
//find a project by ID
router.get("/:id", async (req, res, next) => {
    try {
       const {id} = req.params // same as const id = req.params.id
      const project=  await models.findProject(id)
       res.status(200).json(project)


    }catch (err) {
       next(err)
    }
})


module.exports = router