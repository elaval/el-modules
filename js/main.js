// plain.js
displayMsg("Most populated country: "+ mostPopulatedCountry().name, "plain");

// demo.iife.js
myApp.displayMsg("Most populated country: "+ myApp.mostPopulatedCountry().name, "iife");

// demo.amd.js
require(["js/demo.amd"], function(app) {
	app.displayMsg("Most populated country: "+ app.mostPopulatedCountry().name, "amd");
});

// demo.cjs.js
require(["cjs!js/demo.cjs"], function(app2) {
	app2.displayMsg("Most populated country: "+ app2.mostPopulatedCountry().name, "cjs");
})

// demo.umd.js - iife varient
myApp_umd.displayMsg("Most populated country: "+ myApp_umd.mostPopulatedCountry().name, "umd-iife");

// demo.umd.js - amd variant
require(["js/demo.umd"], function(app) {
	app.displayMsg("Most populated country: "+ app.mostPopulatedCountry().name, "umd-amd");
});
