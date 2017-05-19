#!/usr/bin/env node

'use strict'

let program = require('commander')

let VERSION = require('./package.json').version;
let summary = require('./index.js');
let request = require('request');


program
  .version('0.0.1')
  .arguments('<url>')
  .action(function (url) {
     summary.summarize(url, function(result, failure) {
			if(failure) {
				throw new Error(result.error)
			}
			else {
				console.log(result)
			}
		})
  });

program.parse(process.argv);
