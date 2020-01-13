/*
 * @Author: 作者：LIN
 * @Date: 2020-01-08 01:38:03
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-10 01:41:38
 * @Description: 文件描述
 */
module.exports = options => {

  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next)=>{
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录-1')
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请先登录-2')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录-3')
    console.log(req.user)
    await next()
  }
}