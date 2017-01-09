const express = require('express');
const router = express.Router();
const UserPosts = require('../models/post');
// const mongoose = require('mongoose');
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

router.post( '/comments/:id', (req, res) => {
    const id= req.params.id;
    UserPosts.findById(id, (err, post) => {

        if(err) {
            return res.status(500).json({
                title: `No post was found by id: ${id}`,
                error: err
            })
        }
        else {
            post.comments.push(req.body.value);
            post.save(function (err, result) {
                if(err) {
                    return res.status(500).json({
                        title: 'An error occurred when uploading a comment',
                        error: err
                    })
                }

                res.json(result);
            });
        }
    });
} );
// router.post('/comments/:id', (req,res) => {
    
//     // console.log(mongoose.models.Post.db.models.Post.schema.paths._id)
//     // console.log('id', _id)
//     // .Schema.paths._id)
//     var id= req.params.id.
//     // var id = new mongoose.Types.ObjectId(ids);
//     console.log(UserPosts);
//         UserPosts.findById( id, function( err, document ) {
//             console.log( err, document );
//         } );
//        /* UserPosts.findOne({_id: ObjectId(id)}).exec((err,doc)=>{
//             if (err) throw err;
//             console.log(doc);
//         })*/
// })

module.exports = router;
