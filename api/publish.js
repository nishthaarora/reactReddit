const express = require('express');
const router = express.Router();
const UserPosts = require('../models/post');

router.post('/publish', (req, res) => {
    UserPosts.create({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        community: req.body.community
    }).then(() => {
        res.json({success:true});
    }).catch((err) => {
        if(err) throw err;
    })
})

router.post('/comments/:id', (req,res) => {
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
             console.log(post)
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

})


module.exports = router;