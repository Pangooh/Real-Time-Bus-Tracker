
var busid = ''

async function checkbus(){

var locations = await getBusLocations();

for(let i=0; i<locations.length; i++){
console.log(locations[i].id)
}
}



async function addMarkers(){
	// get bus data
	var locations = await getBusLocations();

	locations.forEach(function(bus){
		var check = bus.id;		
		if (check=busid){
			moveMarker(marker,bus);
		}
	});

	console.log(new Date());
	setTimeout(addMarkers,15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

//    function addMarker(bus){
//    var lat = bus.attributes.latitude
//    var long = bus.attributes.longitude
//	var marker = new mapboxgl.Marker()
//    .setLngLat([lat,long])
//    .addTo(map)
//}

    function moveMarker(marker,bus) {
	// move icon to new lat/lon
    var lat = bus.attributes.latitude
    var long = bus.attributes.longitude
    marker.setLngLat([long,lat]);
}


