const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const ContactInfo = mongoose.model('contactInfo', schema);

module.exports = ContactInfo;