'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '"http://localhostes.com:8081"'
}
