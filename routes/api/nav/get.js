const express = require('express')
const router = express.Router()

router.get('/get', function (req, res) {
  console.log('get.query', req.query)
  console.log('get.body', req.body)

  const data = {
    code: 200,
    data: {
      name: 'get',
      text: '这是一个get请求'
    },
    msg: ''
  }
  res.jsonp(data)
})

module.exports = router
