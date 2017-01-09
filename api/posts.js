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

// router.post( '/comments/:id', ( req, res) => {
//     var id= req.params.id;
//     if (id.match(/^[0-9a-fA-F]{24}$/)) {
//         UserPosts.find({}, (err, post) => {
//             if(err)throw err;
//             else {
//                 post = post.filter( (data) => data._id == id )
//                 res.json({data:post});
//             }
//         });
//     } else {
//         res.json({success: false});
//     }
// } );


router.post('/comments/:id', (req,res) => {
    
    // console.log(mongoose.models.Post.db.models.Post.schema.paths._id)
    // console.log('id', _id)
    // .Schema.paths._id)
    var id= req.params.id
    id = new mongoose.Types.ObjectId( );
    console.log(id);
    // var id = new mongoose.Types.ObjectId(ids);
    // console.log(UserPosts);
        UserPosts.findById(id, function( err, document ) {
            if(err) throw err;
            res.json({document});

        } );
       /* UserPosts.findOne({_id: ObjectId(id)}).exec((err,doc)=>{
            if (err) throw err;
            console.log(doc);
        })*/
})

module.exports = router;
