const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    pos: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;