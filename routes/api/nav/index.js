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

router.get('/file', function (req, res) {
  console.log('get.params', req.params)
  const a = fs.readFileSync('./package.json')
  // console.log(a)
  // const data = new Blob(a)
  res.jsonp(a)
})

router.delete('/delete', function (req, res) {
  console.log('get.query', req.query)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p'
    },
    msg: ''
  }
  res.jsonp(data)
})

router.patch('/patch', function (req, res) {
  console.log('post.body', req.body)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p'
    },
    msg: ''
  }
  res.jsonp(data)
})

// router.post('/upload', function (req, res) {
//   let busboy = new Busboy({ headers: req.headers })
//   req.pipe(busboy)
//
//   // 监听file事件获取文件(字段名，文件，文件名，传输编码，mime类型)
//   busboy.on('file', function (filedname, file, filename, encoding, mimetype) {
//     // 创建一个可写流
//     let writeStream = fs.createWriteStream('./static/public/img/' + filename)
//
//     // 监听data事件，接收传过来的文件，如果文件过大，此事件将会执行多次，此方法必须写在file方法里
//     file.on('data', function (data) {
//       writeStream.write(data)
//     })
//
//     // 监听end事件，文件数据接收完毕，关闭这个可写流
//     file.on('end', function (data) {
//       const _data = {
//         code: 200,
//         urls: [filename],
//         data: 'http://192.168.14.160:8086/public/img/zzz.pdf',
//         msg: ''
//       }
//       res.jsonp(_data)
//       writeStream.end()
//     })
//   })
//
//   // 监听finish完成事件,完成后重定向到百度首页
//   // busboy.on('finish', function () {
//   //   res.writeHead(303, {Connection: 'close', Location: 'http://www.baidu.com/'})
//   //   res.end()
//   // })
//
//   // console.log('post.body', req.body)
//   // console.log('get.query', req.query)
//   // //生成multiparty对象，并配置上传目标路径
//   // const form = new multiparty.Form({
//   //   maxFieldsSize: 1000,
//   //   uploadDir: './static/public/img/',
//   //   autoFiles: true,
//   //   maxFilesSize: 10000000,
//   //   maxFields: 10000000
//   // })
//   // // console.log('form', form.parse)
//   // //上传完成后处理
//   // form.parse(req, function (err, fields, files) {
//   //   console.log('ppp')
//   //   if (err) {
//   //     console.log('parse error: ' + err)
//   //   } else {
//   //     console.log('files: ', files.file)
//   //     const inputFile = files.file[0]
//   //     const uploadedPath = inputFile.path
//   //     const dstPath = './static/public/img/' + inputFile.originalFilename
//   //     //重命名为真实文件名
//   //     fs.rename(uploadedPath, dstPath, function (err) {
//   //       if (err) {
//   //         console.log('rename error: ' + err)
//   //       } else {
//   //         console.log('rename ok')
//   //       }
//   //     })
//   //   }
//   // })
//   // const data = {
//   //   code: 200,
//   //   urls: [''],
//   //   msg: ''
//   // }
//   // res.jsonp(data)
// })

module.exports = router
