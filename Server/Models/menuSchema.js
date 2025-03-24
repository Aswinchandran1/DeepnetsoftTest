const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    menuName: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true
    }
   
})

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu