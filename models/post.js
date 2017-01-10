const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
      type: String
    },
    title: {
      type: String
    },
    content: {
    type: String
    },
    community: {
    type: String
    },
    comments: {
      type: [String]
    },
    created_at: {
    type: Date,
    default: Date.now
    },
    updated_at: {
    type: Date
    }
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;