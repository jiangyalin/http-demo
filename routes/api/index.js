const express = require('express')
const router = express.Router()

// 导航
router.use('/nav', require('./nav/index'))

module.exports = router
