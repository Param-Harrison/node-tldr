#!/usr/bin/env node

'use strict'

let program = require('commander')

let VERSION = require('./package.json').version;
let summary = require('./index.js');
let request = require('request');

function getURL (val) {
	return val
}


program
  .version(VERSION)
  .option('-s, --summarize [url]', 'Summarize an article', getURL)
  .parse(process.argv);

if (program.summarize) {
	let url = program.summarize
	summary.summarize(url, function(result, failure) {
		if(failure) {
			console.log(`${result.error}`)
		}
		else {
			console.log(result)
		}
	})
}
