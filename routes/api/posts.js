const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');
const Profile = require('../../models/Profile');

// @route POST api/posts
// @desc Create a post
// @access Private
router.post(
  '/', 
  [auth, [
    check('text', 'Text is required').not().isEmpty(),
  ]], 
  async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {     
      const user = await User.findById(req.user.id).select('-password');
      
      const newPost = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      }

      const post = new Post(newPost);
      await post.save();
      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route GET api/posts
// @desc Get all posts
// @access Private
router.get('/', auth, async(req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/posts/:id
// @desc Get post by Id
// @access Private
router.get('/:id', auth, async(req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    if(!posts) {
      return res.status(404).json({ msg: 'Post not found'});
    }
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    if(error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found'});
    }
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/posts/:id
// @desc Delete a post
// @access Private
router.delete('/:id', auth, async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post) {
      return res.status(404).json({ msg: 'Post not found'});
    }

    if(post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized'});
    }
    post.deleteOne().exec();

    res.json({ msg: 'Post Removed'});
  } catch (error) {
    console.error(error.message);
    if(error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found'});
    }
    res.status(500).send('Server Error');
  }
});

// @route PUT api/posts/like/:id
// @desc Like a post
// @access Private
router.put('/like/:id', auth, async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.like.filter((like) => like.user.toString() === req.user.id).length > 0) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.like.unshift( { user: req.user.id });
    await post.save();
    res.json(post.like);    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route PUT api/posts/unlike/:id
// @desc Like a post
// @access Private
router.put('/unlike/:id', auth, async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.like.filter((like) => like.user.toString() === req.user.id).length === 0) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    const removeIndex = post.like.find((post, index) => {
      if(post.user.id.toString() === req.user.id) {
        return index;
      }
      return -1;
    });
    post.like.splice(removeIndex, 1);
    await post.save();
    res.json(post.like);    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/posts/comment/:id
// @desc Comment on a post
// @access Private
router.post(
  '/comment/:id', 
  [auth, [
    check('text', 'Text is required').not().isEmpty(),
  ]], 
  async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {     
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);
      
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      }

      post.comments.unshift(newComment);
      await post.save();

      res.json(post.comments);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/posts/comment/:id/:comment_id
// @desc Delete a comment in a post
// @access Private
router.delete('/comment/:id/:comment_id', auth, async(req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    const commentToDelete = post.comments.find((comment) => req.params.comment_id === comment.id.toString());
    if(!commentToDelete) {
      return res.status(404).json({ msg: 'Comment does not exist'});
    }

    // Check comment belongs to the user
    if(commentToDelete.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized'});
    }
    
    const removeIndex = post.comments.map((comment) => comment.user.toString()).indexOf(req.user.id)
    post.comments.splice(removeIndex, 1);

    await post.save();
    res.json(post.comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;