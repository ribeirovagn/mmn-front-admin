'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_ENDPOINT: '"http://mln30.local/admin"',
  CLIENT_SECRET: '"KnsfLts3X48vGqODP9XmnxCEcUWJUgYaQWvNyisG"',
  CLIENT_ID: '1',
  GRANT_TYPE: '"password"'  
})
