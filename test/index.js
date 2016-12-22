'use strict'

const path = require('path')

const test = require('ava')

const argvAutoGlob = require('../lib/index.js')

const PROJECT_PATH = path.join(__dirname, '..')

test('exports a function', (t) => t.is(typeof argvAutoGlob, 'function'))

test('argvAutoGlob([], {}) returns Array', (t) => {
  t.truthy(Array.isArray(argvAutoGlob([], {})))
})

test('argvAutoGlob([ "test/**/*.js" ], { cwd }) is globbed', (t) => {
  const result = argvAutoGlob([ 'test/**/*.js' ], { cwd: PROJECT_PATH })
  const expected = [ 'test/index.js' ]
  t.deepEqual(result, expected)
})

test('argvAutoGlob([ "test/missing.js" ], {}) not globbed', (t) => {
  const result = argvAutoGlob([ 'test/missing.js' ], {})
  const expected = [ 'test/missing.js' ]
  t.deepEqual(result, expected)
})
