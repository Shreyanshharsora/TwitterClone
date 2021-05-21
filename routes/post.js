const router = require('express').Router();
const verify = require('./verifyToken');
const { postValidation } = require('./validation');


// Add new post
router.get('/add', verify,async (req, res) => {

    // Post Validation
    const {error} = postValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
        const post = new Posts({
            postdata: req.body.postdata,
            email: req.body.email,
            commenterName: req.body.commenterName,
            createdAt: req.body.createdAt
        });
        try{
            const savedPosts = await user.save();
            res.send({ post: post._id});
        
        }catch(err){
            res.status(400).send(err);
        }
});


// Delete post
router.get('/add', verify,async (req, res) => {
    
        const post = new Posts({
            postdata: req.body.postdata,
            email: req.body.email,
            commenterName: req.body.commenterName,
            createdAt: req.body.createdAt
        });
        try{
            const savedPosts = await user.save();
            res.send({ post: post._id});
        
        }catch(err){
            res.status(400).send(err);
        }
    });



module.exports = router;