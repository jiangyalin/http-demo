const express = require('express')
const router = express.Router()

router.post('/post', function (req, res) {
  console.log('delete.query', req.query)
  console.log('post.body', req.body)

  const data = {
    code: 200,
    data: {
      name: 'post',
      text: '这是一个post请求'
    },
    msg: ''
  }
  res.jsonp(data)
})

module.exports = router
