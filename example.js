var summary = require('./index.js');

summary.summarize('http://www.bbc.com/news/world-europe-27599836', function(title, summary, failure) {
	if (failure) {
		console.log("An error occured!");
	}

  console.log("#### " + title + " ####");
	console.log(summary.join("\n"));
});
