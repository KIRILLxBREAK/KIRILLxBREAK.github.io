function mapClicked() {
	alert("Map!");
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([41.23, 2.11], 13);
 
	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	L.marker([41.23, 2.11]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    		.openPopup();
}

$(document).ready(function() {
	mapClicked();
})
