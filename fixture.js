const mongoose = require('mongoose');
const config = require('./config')

const Category = require('./models/Category')
const Product = require('./models/Product')
const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions)

   const connection =  mongoose.connection

    const collections = await connection.db.collections();
    // console.log(collections, 'collections')

    for (let collection of collections) {
        console.log(collection, 'collection')
        await collection.drop()
    }
    const categories = await Category.create(
        {title: 'CPUs', description: 'Central Processing Units'},
        {title: 'HDDs', description: 'Hard Disk Drives'}
    )
     await Product.create(
        {
            title: 'Intel Core i7',
            price: 500,
            description: 'Very cool CPU',
            category: categories[0]._id
        },
        {
            title: 'Toshiba 500GB',
            price: 60,
            description: 'Just a simple HDD',
            category: categories[1]._id
        },
    );

    await connection.close();

};

run().catch(error => {
    console.log('Something went wrong', error);
});