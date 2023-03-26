const express = require('express')
const router = express.Router();
const { queryInterfaceCreateTable, queryInterfaceAddCol, queryInterfaceAlterCol, queryInterfaceDeleteCol, queryInterfaceDropTable } = require('../controller/queryInterfaceController')

router.route('/queryInterfaceCreateTable').get(queryInterfaceCreateTable)
router.route('/queryInterfaceAddCol').get(queryInterfaceAddCol)
router.route('/queryInterfaceAlterCol').get(queryInterfaceAlterCol)
router.route('/queryInterfaceDeleteCol').get(queryInterfaceDeleteCol)
router.route('/queryInterfaceDropTable').get(queryInterfaceDropTable)

module.exports = router
