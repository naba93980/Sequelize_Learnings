const express = require('express')
const router = express.Router();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controller/userController');
const query = require('../controller/queryController');
const rawQuery = require('../controller/rawQueryController');

router.route('/users').get(getAllUsers);
router.post('/user/new', createUser);
router.route('/user/:id').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/query').get(query)
router.route('/rawQuery').get(rawQuery)

module.exports = router