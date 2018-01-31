const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})

const ContactInfo = mongoose.model('contactInfo', schema);

module.exports = ContactInfo;