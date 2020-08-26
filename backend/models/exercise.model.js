const mongoose = require('mongoose');

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        minlength: 3,
    },
    description: { 
        type: Number, 
        required: true,
        minlength: 11,
        maxlength: 14
        //match: [/^(?:\+?88)?01[15-9]\d{8}$/, "Please Enter a valid Bangladeshi Number"],
    },
    //duration: { type: String, required: true },
    //date: { type: Date, required: true },
},{
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;