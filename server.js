const express = require('express')
const mongoose = require('mongoose')
const products = require('./app/products');
const PORT = 5000;
const DB_URL = 'mongodb://localhost/shop'

const app = express()

app.use(express.json())


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
        app.use('/', products)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
