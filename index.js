const express = require("express")
const helmet = require("helmet")
const welcome = require ("./welcome/welcome")
const projectRouter = require("./projects/projects-router")
const resourceRouter = require("./resources/resource-router")


const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use("/", welcome)
server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})