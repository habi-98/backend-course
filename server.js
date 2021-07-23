const express = require('express');
const mongoose = require('mongoose');
const products = require('./app/products');
const categories = require('./app/categories')
const config = require('./config');
const cors = require('cors')

const PORT = 5000;
const app = express()

app.use(express.json())
app.use(cors())

async function startApp() {
    try {
        await mongoose.connect(config.dbUrl, config.mongoOptions)
        app.use('/products', products);
        app.use('/categories', categories);
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
