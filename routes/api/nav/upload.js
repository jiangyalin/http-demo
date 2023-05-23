const express = require('express')
const Busboy = require('busboy')
const fs = require('fs')
const router = express.Router()

router.post('/upload', function (req, res) {
  console.log('post.upload.query', req.query)
  console.log('ost.upload.body', req.body)

  let busboy = new Busboy({ headers: req.headers })
  req.pipe(busboy)

  // 监听file事件获取文件(字段名，文件，文件名，传输编码，mime类型)
  busboy.on('file', function (filedname, file, filename, encoding, mimetype) {
    // 创建一个可写流
    let writeStream = fs.createWriteStream('./static/' + filename)

    // 监听data事件，接收传过来的文件，如果文件过大，此事件将会执行多次，此方法必须写在file方法里
    file.on('data', function (data) {
      writeStream.write(data)
    })

    // 监听end事件，文件数据接收完毕，关闭这个可写流
    file.on('end', function (data) {
      const _data = {
        code: 200,
        urls: [filename],
        data: 'http://192.168.14.160:8086/static/' + filename,
        msg: ''
      }
      res.jsonp(_data)
      writeStream.end()
    })
  })
})

module.exports = router
