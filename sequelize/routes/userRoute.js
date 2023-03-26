const express = require('express')
const router = express.Router();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controller/userController');
const query = require('../controller/queryController');
const rawQuery = require('../controller/rawQueryController');
const { One2OneGet, BelongsToOne2OneGet, One2ManyGet } = require('../controller/associationGetController');
const { One2OnePost,One2ManyPost,BelongsToOne2OnePost } = require('../controller/associationPostController');

router.route('/users').get(getAllUsers);
router.post('/user/new', createUser);
router.route('/user/:id').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/query').get(query);
router.route('/rawQuery').get(rawQuery);
router.route('/o2o').get(One2OneGet).post(One2OnePost);
router.route('/o2o-belongs2').get(BelongsToOne2OneGet).post(BelongsToOne2OnePost);
router.route('/o2m').get(One2ManyGet).post(One2ManyPost);

module.exports = router