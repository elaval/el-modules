(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.myApp_umd = global.myApp_umd || {})));
}(this, function (exports) { 'use strict';

	var countries = [
		{ "name": "China", "population": 1367485388},
		{ "name": "India", "population": 1251695584},
		{ "name": "United States", "population": 321368864},
		{ "name": "Indonesia", "population": 255993674},
		{ "name": "Brazil", "population": 204259812}
	]

	function mostPopulatedCountry() {
		var selected = null;

		countries.forEach(function(d) {
			selected = selected && selected.pupulation > d ? selected : d; 
		})

		return selected;
	}

	function displayMsg(msg, source) {
		var  msgElement = document.createElement("div");
		document.body.appendChild(msgElement);

		msgElement.innerText = (source ? "<"+source+"> " : "") + msg;
	}

	exports.mostPopulatedCountry = mostPopulatedCountry;
	exports.displayMsg = displayMsg;

	Object.defineProperty(exports, '__esModule', { value: true });

}));