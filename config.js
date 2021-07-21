const path = require('path')

const rootPath = __dirname;

module.exports = {
    rootPath,
    dbUrl: 'mongodb://localhost/shop-tech',
    mongoOptions: {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
}