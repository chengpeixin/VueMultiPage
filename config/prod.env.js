const chalk = require('chalk')
const {
  alpha,
  beta,
  gamma,
  release
} = require('./API.js')
const log = console.log;

const command = process.env.npm_lifecycle_event;
let API_HOST;
if (command == "build:alpha") {
  log(chalk.green('当前环境为:alpha'));
  API_HOST = alpha;
} else if (command == "build:beta") {
  log(chalk.green('当前环境为:beta'));
  API_HOST = beta;
} else if (command == "build:gamma") {
  log(chalk.green('当前环境为:gamma'));
  API_HOST = gamma;
} else if (command == "build:release") {
  log(chalk.green('当前环境为:release'));
  API_HOST = release;
} else {
  API_HOST = alpha;
}
module.exports = {
  NODE_ENV: '"production"',
  "API_HOST": JSON.stringify(API_HOST)
}
