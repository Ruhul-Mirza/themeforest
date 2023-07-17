const express = require("express")
const mongoose = require("mongoose")
const course = require("./router/data.js")
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api/course",course)

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
  })

const mongo_test = process.env.mongo_test_url
const mongo = process.env.mongo_url

mongoose.connect(mongo_test)
.then(() => {
    logger.error("successfully conected to mongodb")

    app.listen(3000,()=>{
        logger.error("Server is running on port 3000")
    })
})
.catch((err) => {
    console.log(err)
})


