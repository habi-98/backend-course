const express = require('express');
const Category = require('../models/Category');

const router = express.Router();



router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()

        res.send(categories)
    }catch (e) {
        res.sendStatus(404)
    }
});

module.exports = router