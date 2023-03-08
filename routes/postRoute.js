const express = require('express')
const router = express.Router();

const { getAllposts, getOnepost, createPost, updatepost, deletepost } = require('../controller/postController');
const { Many2Many } = require('../controller/associationController');

router.route('/posts').get(getAllposts);
router.post('/post/new', createPost);
router.route('/post/:id').get(getOnepost).put(updatepost).delete(deletepost);
router.route('/post-tag/m2m').post(Many2Many);

module.exports = router