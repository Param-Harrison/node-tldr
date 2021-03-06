# node-tldr [![Gittip](http://badgr.co/gittip/philplckthun.png)](https://www.gittip.com/philplckthun/)
Node module summarizing web-articles using a naive algorithm, based on [node-summary](https://github.com/jbrooksuk/node-summary/). Even if it was derived from node-summary it was rewritten from scratch and now only shares approximately ~~5%~~ 0% lines of code.

## Algorithm
The algorithm used is explained [here](http://thetokenizer.com/2013/04/28/build-your-own-summary-tool/). The intersections are calculated between all sentences instead between all sentences per paragraph.

## Install

```
npm install node-tldr
```

## Usage

```javascript
var summary = require('node-tldr');
summary.summarize(url, function(result, failure) {
	if (failure) {
		console.log("An error occured! " + result.error);
	}

	console.log(result.title);
	console.log(result.words);
	console.log(result.compressFactor);
	console.log(result.summary.join("\n"));
});
```

## Command-line Usage

Install the package globally

```bash
npm install node-tldr -g
```
Pass url of page you want to be summarized.

```javascript
 node-tldr url
```

## API

### summary.summarize(object, [options], callback(result, failure))

For *object* you can either pass a string containing an URL, or an already fetched cheerio object.

### Options

`maxAnalyzedSentences` - Maximal number of sentences to be processed in the rank analysis. The analysis performs Cartesian join of sentences, giving  O(n^2) complexity. Hence processing large articles without limitation can lead to extremely high CPU load.

`shortenFactor` - Factor the text should be shortened by. (Summary Length / Text Length = Shorten-Factor) **Default**: 0.30

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
