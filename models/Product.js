const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    image: String
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;