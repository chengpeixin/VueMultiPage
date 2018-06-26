const chalk = require('chalk')

let alpha = {
  URL: "https://www.api/code",
  BASE_URL: "https://www.api/code"
}
let beta = {
  URL: "https://www.api/code",
  BASE_URL: "https://www.api/code"
}
let gamma = {
  URL: "https://www.api/code",
  BASE_URL: "https://www.api/code"
}
let release = {
  URL: "https://www.api/code",
  BASE_URL: "https://www.api/code"
}


module.exports = {
  // 开发
  alpha,
  // 测试
  beta,
  // 验收版本
  gamma,
  // 正式版本
  release
}
