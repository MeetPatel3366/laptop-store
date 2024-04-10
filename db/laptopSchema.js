const mongoose = require('mongoose')
const {Schema} = mongoose 

const laptopSchema = new Schema({
    LaptopId:String,
    name:String,
    price:Number,
    company:String
})

module.exports = {
    laptopSchema
}