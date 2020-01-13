/*
 * @Author: 作者：LIN
 * @Date: 2020-01-05 15:00:46
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-09 23:17:15
 * @Description: 文件描述
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  },
})

module.exports = mongoose.model('AdminUser', schema)
