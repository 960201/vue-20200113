/*
 * @Author: 作者：LIN
 * @Date: 2020-01-09 14:27:07
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-12 14:05:43
 * @Description: 文件描述
 */
const express = require('express')

const app = express()
// 秘钥
app.set('secret', 'i2u34y12oi3u4y8')

app.use(require('cors')())
app.use(express.json())

app.use('/', express.static(__dirname + '/web'))
app.use('/admin/', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
