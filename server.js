const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const database = require('./controllers/database')

dotenv.config()
const app = express()

const home = require('./routes/index')

app.use('/', home)

app.listen(() => {
    console.log(`Server is running on the port: ${process.env.PORT}`)
})