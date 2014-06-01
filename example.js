var summary = require('./index.js');

summary.summarize('http://thenextweb.com/apps/2014/05/28/skillz-brings-real-money-gaming-platform-ios', function(result, failure) {
	if (failure) {
		console.log("An error occured! " + result.error);
	}

	console.log("#####################");
	console.log("#### " + result.title);
	console.log("#### Words: " + result.words);
	console.log("#### Compressed by: " + result.compressFactor);
	console.log("#####################");
	console.log(result.summary.join("\n"));
});
