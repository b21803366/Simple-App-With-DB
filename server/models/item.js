const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    context: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Item = mongoose.model('item', itemSchema)
module.exports = Item

