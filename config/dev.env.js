'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const chalk = require('chalk')
const {
  alpha,
  beta,
  gamma,
  release
} = require('./API.js')
const log = console.log;

const command = process.env.npm_lifecycle_event;
let API_HOST = {};

if (command == "dev:alpha") {
  log(chalk.green('当前环境为:alpha'));
  API_HOST = alpha;
} else if (command == "dev:beta") {
  log(chalk.green('当前环境为:beta'));
  API_HOST = beta;
} else if (command == "dev:gamma") {
  log(chalk.green('当前环境为:gamma'));
  API_HOST = gamma;
} else if (command == "dev:release") {
  log(chalk.green('当前环境为:release'));
  API_HOST = release;
} else {
  API_HOST = alpha;
}


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  "API_HOST": JSON.stringify(API_HOST)
})
