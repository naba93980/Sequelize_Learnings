const express = require('express')
const router = express.Router();

const { getAllposts, getOnepost, createPost, updatepost, deletepost } = require('../controller/postController');
const { Many2ManyGet } = require('../controller/associationGetController');
const { Many2ManyPost } = require('../controller/associationPostController');

router.route('/posts').get(getAllposts);
router.post('/post/new', createPost);
router.route('/post/:id').get(getOnepost).put(updatepost).delete(deletepost);
router.route('/post-tag/m2m').get(Many2ManyGet).post(Many2ManyPost);

module.exports = router