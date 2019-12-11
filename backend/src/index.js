const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')
const { database } = require('./config.json')

const app = express()

mongoose.connect(database,{
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor ON')
})