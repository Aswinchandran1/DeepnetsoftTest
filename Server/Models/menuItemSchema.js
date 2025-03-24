const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Menu'
    }
})

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem