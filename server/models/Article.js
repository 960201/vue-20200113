/*
 * @Author: 作者：LIN
 * @Date: 2020-01-09 14:27:07
 * @LastEditors: 最后编写者
 * @LastEditTime: 2020-01-10 06:55:57
 * @Description: 文件描述
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  title: { type: String },
  body: { type: String },
},{
  timestamps: true
})

module.exports = mongoose.model('Article', schema)