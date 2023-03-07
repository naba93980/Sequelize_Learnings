const express = require('express')
const router = express.Router();

const { getAllposts, getOnepost, createPost, updatepost, deletepost } = require('../controller/postController');

router.route('/posts').get(getAllposts);
router.post('/post/new', createPost);
router.route('/post/:id').get(getOnepost).put(updatepost).delete(deletepost);

module.exports = router