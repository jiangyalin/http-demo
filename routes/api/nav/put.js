const express = require('express')
const router = express.Router()

router.put('/put', function (req, res) {
  console.log('put.query', req.query)
  console.log('put.body', req.body)
  console.log('put.path', req.params)

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
