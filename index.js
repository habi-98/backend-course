const express = require('express')
const mongoose =  require('mongoose')
const MongoClient = require('mongodb').MongoClient

const PORT = 5000;
const DB_URL = 'mongodb://localhost:27017/chat'

const app = express()

app.use(express.json(  ))

app.post('/messages', (req, res) => {
    console.log(req.body)
    res.status(200).json('сервер работаетddd')
})

async function startApp () {
    try {
        await mongoose.connect(DB_URL,   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } )
       app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT ))
    } catch (e) {
        console.log(e)
    }
}

startApp()
