const express = require('express');
const router = express.Router();
const UserPosts = require('../models/post');
const mongoose = require('mongoose');
// var ObjectId = require("mongojs").ObjectId;
require('mongoose').Schema.ObjectId;
// var id = new mongoose.Types.ObjectId(stringId);

router.get('/', (req, res) => {
    UserPosts.find({}, (err, post) => {
        if(err)throw err;
        else {
        res.json({posts:post})
        }
    })
});

router.get('/:subreddit', (req,res) => {
    UserPosts.find({community: req.params.subreddit}, (err, result) => {
        res.json(result);
    });
});

module.exports = router;
