/**
 * Register babel
 * @function registerES2015
 * @param {Object} options
 */
'use strict'

const register = require('ababel/register')

/** @lends registerES2015 */
function registerES2015 (options = {}) {
  let { presets } = options
  options.presets = [ 'es2015' ].concat(presets || [])
  register(options)
}

module.exports = registerES2015
