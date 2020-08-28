const mongoose = require('mongoose');

const Schema = mongoose.Schema

const contactSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        minlength: 3,
    },
    number: { 
        type: String, 
        required: true,
    },

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;