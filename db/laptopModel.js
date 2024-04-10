const mongoose = require('mongoose')
const laptop = require('./laptopSchema').laptopSchema

const Laptop = mongoose.model('laptop',laptop)

module.exports = {
    Laptop
}

