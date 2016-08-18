/* @flow */
'use strict'

const glob = require('glob')

const GLOB_REGEXP = /[\*\?\|]/

function isGlob (string /* : string */) /* : boolean */ {
  return GLOB_REGEXP.test(string)
}

function expandGlob (
  string /* : string */,
  globOptions /* : { [id:string]: mixed } */
) /* Array<string> */ {
  return glob.sync(string, globOptions)
}

module.exports = function (
  argv /* : Array<string> */,
  globOptions /* : { [id:string]: mixed } */
) /* : Array<string> */ {
  return (argv || []).reduce((result, value) => {
    if (isGlob(value)) {
      result.push.apply(result, expandGlob(value, globOptions || {}))
    } else {
      result.push(value)
    }
    return result
  }, [])
}
