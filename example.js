var summary = require('./index.js');

summary.summarize('http://www.golem.de/news/virtual-cockpit-mit-60-bildern-pro-sekunde-in-den-roten-drehzahlbereich-1405-106526.html', function(title, summary, failure) {
	if (failure) {
		console.log("An error occured!");
	}

  console.log(title);
	console.log(summary.join("\n"));
});
