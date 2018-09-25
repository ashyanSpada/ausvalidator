/**
 * JS验证器，可以验证手机号， 微信号， 邮箱
 * @author ausar <wagnjianfei@gmail.com>
 */
'use strict'

/**
 * 验证参数是否字符串
 * @param {any} param 输入的参数
 */
var isString = function (param) {
  if (typeof param !== 'string') {
    throw new Error('Invalid!!! Param should be a string')
  }
}
/**
 * 验证手机号
 * @function
 * @param {string} phoneNo 手机号
 * @returns {boolean} 表示验证成功与失败的布尔值 true表示成功 false表示失败
 */
 var isPhoneNo = function (phoneNo) {
   isString(phoneNo)
   var reg = /^[1][3, 4, 5, 6, 7, 8][0 - 9]{9}$/
   return reg.test(phoneNo)
 }

 /**
  * 验证微信号
  * @function
  * @param {string} phoneNo 微信号
  * @returns {boolean} 表示验证成功与失败的布尔值 true表示成功 false表示失败
  */
 var isWechatNo = function (wechatNo) {
   isString(wechatNo)
   var reg = /^[a-z A-Z][a-z A-Z 0-9 _ -]{5-19}$/
   return reg.test(wechatNo)
 }

 module.exports = {isPhoneNo, isWechatNo}
