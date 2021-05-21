const db = require('mongoose');

const postSchema = new db.Schema({
    postdata:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    User:{
        type: db.Schema.objectId,
        required: true,
        min: 6,
        max: 255
    },
    commenterName:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    createdAt:{
        type: Date,
        default: Date.now
    },

});

module.exports = db.model('Posts',postSchema);