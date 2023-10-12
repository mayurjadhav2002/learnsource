const mongoose = require('mongoose');

const blogModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: false
    },
    written_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user_id"

    },
    user_image: {
        type: String,
        required: true
    },
    user_bio: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    views: {
        type: Number,
        default: 1
    },
    likes: {
        type: Number,
        default: 0
    },
    created_on: {
        type: Date,
        default: Date.now()
    },
    blog: {
        type: String,
        default: 0
    },
    recommended: {
        type: Number,
        default: 0
    },
    report: {
        type: Boolean,
        default: 0
    }

});

module.exports = mongoose.model('blogModel', blogModel);;