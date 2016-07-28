/**
 * Browserify transform
 * @function transformES2015
 * @param {Object} options
 */
'use strict'

const transform = require('ababel/transform')

/** @lends transformES2015 */
function transformES2015 (options = {}) {
  let { presets } = options
  options.presets = [ 'es2015' ].concat(presets || [])
  transform(options)
}

module.exports = transformES2015
