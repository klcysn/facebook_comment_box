const express = require("express")
require("dotenv").config()
const main = require("./router/main")
const DB = require("./models/dbConnect")
const cors = require('cors')

DB()



const app = express()

app.use(cors())

app.use(express.json())

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 8000

app.listen(port, ()=>{console.log(`I am listen on ${port}`)})

app.use("/api", main)