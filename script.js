function mapClicked() {
	// ??????? ?????? ????? ? div#map
	var map = new L.Map('map', {
		maxZoom : 19, // ????????? ???????????? ???????
		minZoom : 2 // ? ???????????
	}).setView([0,0], 2); // ? ??????? ??????????????? ? ?????? ?????
	// ??????? ???? ? ?????? google c ????? ROADMAP ? ??????????? ?????.
	var ggl = new L.Google('ROADMAP', {
		mapOptions: {
			backgroundColor: "#19263E",
			styles : [
			{
				"featureType": "water",
				"stylers": [
				{
					"color": "#19263E"
				}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
				{
					"color": "#0E141D"
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#0E141D"
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#21193E"
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#21193E"
				},
				{
					"weight": 0.5
				}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#21193E"
				}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#21193E"
				},
				{
					"weight": 0.5
				}
			]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#21193E"
				}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#365387"
				}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
				{
					"color": "#fff"
				},
				{
					"lightness": 13
				}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
				{
					"color": "#365387"
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#000000"
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#19263E"
				},
				{
					"lightness": 0
				},
				{
					"weight": 1.5
				}
				]
			}
			]
		}
	});

	// ????????? ???? ?? ?????.
	map.addLayer(ggl);
}