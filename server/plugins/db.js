/*
 * @Author: 作者：LIN
 * @Date: 2020-01-09 14:27:07
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-10 02:53:01
 * @Description: 文件描述
 */
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  require('require-all')(__dirname + '/../models')
}