const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Feedback = mongoose.model('feedback', schema);

module.exports = Feedback;