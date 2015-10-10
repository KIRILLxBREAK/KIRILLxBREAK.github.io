function mapClicked() {
	alert("Map!");
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([55.432, 37.654], 13);
 
	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

$(document).ready(function() {
	mapClicked();
})
