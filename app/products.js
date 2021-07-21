const express = require('express');

const Product = require('../models/Product')
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const products = await Product.find()

        res.send(products)
    } catch (e) {
        res.sendStatus(404)
    }

})

module.exports = router