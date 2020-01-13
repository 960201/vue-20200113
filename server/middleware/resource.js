/*
 * @Author: 作者：LIN
 * @Date: 2020-01-08 01:43:27
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-10 01:36:21
 * @Description: 文件描述
 */
module.exports = options=>{
  return async (req, res, next) => {
    const modeName = require("inflection").classify(req.params.resource);
    req.Model = require(`../models/${modeName}`);
    next();
  }
}