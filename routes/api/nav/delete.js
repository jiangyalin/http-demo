const express = require('express')
const router = express.Router()

router.delete('/delete', function (req, res) {
  console.log('delete.query', req.query)
  console.log('delete.body', req.body)

  const data = {
    code: 200,
    data: {
      name: 'delete',
      text: '这是一个delete请求'
    },
    msg: ''
  }
  res.jsonp(data)
})

module.exports = router
