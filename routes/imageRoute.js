const express = require('express')
const router = express.Router();

const {polymorphicGetImage, polymorphicGetVideo, polymorphicPost, getComments} = require('../controller/polymorphicController')

router.route('/polymorphicO2Mimage').get(polymorphicGetImage).post(polymorphicPost);
router.route('/polymorphicO2Mvideo').get(polymorphicGetVideo).post(polymorphicPost);
router.route('/polymorphicO2Mcomment').get(getComments)

module.exports = router