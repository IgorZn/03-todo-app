const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    body: {
        type: String,
    }
})

module.exports = mongoose.model('ToDo', toDoSchema);
