const express = require("express")

const model = require("./resource-model")

const router = express.Router()

router.get("/", async (req,res, next) => {
    try {
       const resources = await model.getAllResources()
       res.status(200).json(resources)
    }catch (error){
      next(error)
    }

})

router.get("/:id", async (req, res, next) => {
    try{
        const id = req.params.id //this is same as const {id} = req.params
        const resourceById = await model.findResourceById(id)
        res.status(200).json(resourceById)


    }catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try{

        const newPost = await model.addResource(req.body)
        res.status(201).json(newPost)

    }catch(error){
        next(error)
    }
})


module.exports = router