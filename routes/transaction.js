const express = require('express')
const router = express.Router();

const { transaction, getTransaction } = require('../controller/transaction')

router.route('/transaction').get(getTransaction).post(transaction)

module.exports = router