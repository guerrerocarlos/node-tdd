# node-tdd

[![Build Status](https://circleci.com/gh/blackflux/node-tdd.png?style=shield)](https://circleci.com/gh/blackflux/node-tdd)
[![Test Coverage](https://img.shields.io/coveralls/blackflux/node-tdd/master.svg)](https://coveralls.io/github/blackflux/node-tdd?branch=master)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=blackflux/node-tdd)](https://dependabot.com)
[![Dependencies](https://david-dm.org/blackflux/node-tdd/status.svg)](https://david-dm.org/blackflux/node-tdd)
[![NPM](https://img.shields.io/npm/v/node-tdd.svg)](https://www.npmjs.com/package/node-tdd)
[![Downloads](https://img.shields.io/npm/dt/node-tdd.svg)](https://www.npmjs.com/package/node-tdd)
[![Semantic-Release](https://github.com/blackflux/js-gardener/blob/master/assets/icons/semver.svg)](https://github.com/semantic-release/semantic-release)
[![Gardener](https://github.com/blackflux/js-gardener/blob/master/assets/badge.svg)](https://github.com/blackflux/js-gardener)

Test wrapper to abstract commonly used test setups


## Install

Install with [npm](https://www.npmjs.com/):

    $ npm install --save node-tdd

## Usage

Please see tests for usage examples.

### Options

#### useTmpDir

Type: `boolean`<br>
Default: `false`

When set to true, a fresh temporary directory is set up for each test. The directory is cleaned up after the test run has completed.

#### useNock

Type: `boolean`<br>
Default: `false`

When set to true, all requests are automatically nocked. The recording files are automatically created relative to the current test file.
