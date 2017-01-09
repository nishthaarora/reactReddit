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
});

// router.get('/comments/:id', (req, res) => {

//     var id =  req.params.id;
//     console.log(id)
//     UserPosts.findById(id).exec((err,doc) => {
//         if(err) throw err;
//        else { console.log(doc) }
//     })

// //   try {
// //     var _id = mongoose.Types.ObjectId.fromString(id);  
// //     console.log(_id)
// //         UserPosts.findOneAndUpdate({_id: id}, { $set: {comments: req.body.value} }, { new: true }, (err, doc) => {
// //         if(err)throw err;
// //       return res.json({success:true});
        
// //     });
// //   }catch (err) {
// //       res.status(404).send('Page Not found')
// //   } 
// })


module.exports = router;