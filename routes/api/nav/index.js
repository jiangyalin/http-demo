const express = require('express')
const router = express.Router()
// const multiparty = require('multiparty')
const formidable = require('formidable')
const fs = require('fs')
const Busboy = require('busboy')

router.use('/', require('./get'))

router.use('/', require('./post'))

router.use('/', require('./delete'))

router.use('/', require('./put'))

router.use('/', require('./form-data'))

router.use('/', require('./upload'))

router.use('/', require('./path'))

module.exports = router
