const express = require('express')
const formidable = require('formidable')
const router = express.Router()

router.post('/formData', function (req, res) {
  const form = formidable({ multiples: true })
  console.log('post.formData.query', req.query)

  form.parse(req, (err, fields, files) => {
    console.log('post.body.formData', fields) // formData
    console.log('post.req.files', files)

    if (err) return console.log('err', err)

    const data = {
      code: 200,
      data: {
        name: 'post.formData',
        text: '这是一个post.formData请求'
      },
      msg: ''
    }
    res.json(data)
  })
})

module.exports = router
