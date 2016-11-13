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

export { mostPopulatedCountry, displayMsg };