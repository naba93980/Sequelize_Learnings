const express = require('express')
const router = express.Router();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controller/userController');
const query = require('../controller/queryController');
const rawQuery = require('../controller/rawQueryController');
const { One2One, BelongsToOne2One, One2Many } = require('../controller/associationController');

router.route('/users').get(getAllUsers);
router.post('/user/new', createUser);
router.route('/user/:id').get(getOneUser).put(updateUser).delete(deleteUser);
router.route('/query').get(query);
router.route('/rawQuery').get(rawQuery);
router.route('/o2o').get(One2One);
router.route('/o2o-belongs2').get(BelongsToOne2One);
router.route('/o2m').get(One2Many);

module.exports = router