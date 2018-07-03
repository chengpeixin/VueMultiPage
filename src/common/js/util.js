function Util () {
  this.params = arguments
  this.commit = function (method) {
    if (!this[method]) console.error(method + ' is not a function')
    return this[method](arguments)
  }
}

Util.prototype = {
  constructor: Util
}
// 是否为email
Util.prototype.isemail = function (arg) {
  const str = arg[1]
  return new Promise(function (resolve, reject) {
    if (/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str)) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}
// 是否为手机号
Util.prototype.isphone = function (arg) {
  const str = arg[1]
  return new Promise(function (resolve, reject) {
    if (/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(str)) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}

export default new Util()
