const express = require('express')
const router = express.Router()

router.put('/put', function (req, res) {
  console.log('get.query', req.query)
  console.log('get.body', req.body)

  const data = {
    code: 200,
    data: {
      name: 'put',
      text: '这是一个put请求'
    },
    msg: ''
  }
  res.jsonp(data)
})

module.exports = router
