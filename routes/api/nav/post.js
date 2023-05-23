const express = require('express')
const router = express.Router()

router.post('/post', function (req, res) {
  console.log('post.query', req.query)
  console.log('post.body', req.body)
  console.log('post.path', req.params)

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
