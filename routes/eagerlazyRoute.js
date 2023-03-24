const express = require('express')
const router = express.Router();

const { lazy, eager } = require('../controller/eagerlazyController')

router.route('/eager').get(eager)
router.route('/lazy').get(lazy)

module.exports = router