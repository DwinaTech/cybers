const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String
    },
    message: {
        type: String
    }
})

const Feedback = mongoose.model('feedback', schema);

module.exports = Feedback;