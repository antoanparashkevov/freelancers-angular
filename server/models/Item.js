const {Schema, model, Types: {ObjectId}} = require('mongoose')

const itemSchema = new Schema({
    make: {
        type: String,
        required: true,
        minlength: [4, 'Make must be at least 4 characters long']
    },
    model: {
        type: String,
        required: true,
        minlength: [4, 'Model must be at least 4 characters long']
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: value => value >= 1950 && value <= 2050,
            message: 'Year must be between 1950 and 2020 '
        }
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters long']
    },
    price: {
        type: Number,
        required: true,
        min: [0.01, 'Price must be a positive number']
    },
    img: {
        type: String,
        required: [true, 'Image url is required!'],
    },
    material: {
        type: String,
        default: ''
    },
    _ownerId: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
})

const Item = model('Item', itemSchema)

module.exports = Item;