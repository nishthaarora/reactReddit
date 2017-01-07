const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
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
    comments: [{
    type: Array
    }], 
    created_at: {
    type: Date,
    default: Date.now
    },
    updated_at: {
    type: Date
    }
});

var Post = mongoose.model('Post', post);
module.exports = Post;