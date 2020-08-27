const mongoose = require('mongoose');

const Schema = mongoose.Schema

const contactSchema = new Schema({
    // validator: { $or: 
    //     [{
    //     username: { 
    //     type: String, 
    //     required: true, 
    //     unique: true, 
    //     trim: true, 
    //     minlength: 3,
    // }},{
    //     number: { 
    //         type: String,
    //         $regex: /@mongodb\.com$/, 
    //         required: true
    //     }}
    //     ]

    // }
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
        //match: [/.+\@.+\..+/, 'Please fill a valid email address'] 
        

        //pattern: "/^(?:\+88|01)?(?:\d{11}|\d{13})$/"
    },

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;