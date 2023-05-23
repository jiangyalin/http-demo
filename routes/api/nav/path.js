const express = require('express')
const router = express.Router()

router.get('/path/:id', function (req, res) {
  console.log('get.path.query', req.query)
  console.log('get.path.body', req.body)
  console.log('get.path.path', req.params)

  const data = {
    code: 200,
    data: {
      name: 'path',
      text: '这是一个get.path请求'
    },
    msg: ''
  }
  res.jsonp(data)
})

module.exports = router
