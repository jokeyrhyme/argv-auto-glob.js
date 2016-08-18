# argv-auto-glob.js [![npm](https://img.shields.io/npm/v/argv-auto-glob.svg?maxAge=2592000)](https://www.npmjs.com/package/argv-auto-glob) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/github/jokeyrhyme/argv-auto-glob.js?branch=master&svg=true)](https://ci.appveyor.com/project/jokeyrhyme/argv-auto-glob.js) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/argv-auto-glob.js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/argv-auto-glob.js)

automatically expand globs (cross-platform) for the `process.argv` array (or similar)


## What is this?

Popular shells on macOS and Linux automatically expand globs prior to executing commands.
However, the default shells on Windows do not.

This library checks a `process.argv`-like array of strings,
detects any globs,
and expands the globs.
This is very convenient for developing consistent cross-platform CLI tools.


## Usage


### argvAutoGlob (argv, globOptions)

- argv: Array<string>

- globOptions: see https://www.npmjs.com/package/glob#options

- returns Array<string>


#### Example

We execute a Node.js script like so:

- `node path/to/index.js **/*.txt`

where our index.js file contains:

```js
#! /usr/bin/env node
const argvAutoGlob = require('argv-auto-glob')

process.argv
// => (Windows) ['.../node', '.../index.js', '**/*.txt']
// => (bash/zsh) ['.../node', '.../index.js', 'example.txt', 'dir/more.txt', ... ]

process.argv = argvAutoGlob(process.argv)

process.argv
// => (all) ['.../node', '.../index.js', 'example.txt', 'dir/more.txt', ... ]
```

