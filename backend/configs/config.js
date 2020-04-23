require('dotenv').config();


module.exports = {
    MONGO_URI = process.env.MONGO_URI,
    PRODUCT = process.env.NODE_ENV
}