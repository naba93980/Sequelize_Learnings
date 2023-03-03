const express = require('express')
const router = express.Router();
const { getAllUsers,getOneUser,createUser,updateUser } = require('../controller/usersController');

router.route('/users').get(getAllUsers);
router.post('/user/new', createUser);
router.route('/user/:id').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router