const db = require('mongoose');

const userSchema = new db.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date:{
        type: Date,
        default: Date.now
    },

});

module.exports = db.model('User',userSchema);