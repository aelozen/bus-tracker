// This contains access token
mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// Creates the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554], // starting position
  zoom: 14, // starting zoom
});

// This array will contain the live coordinates for all bus stops between MIT and Harvard
const busStops = [];

 //Pulls bus locations functions 
 async function run(){
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);
  
  locations.forEach((bus) => {
		var marker = new mapboxgl.Marker()
		.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
		.setPopup(new mapboxgl.Popup({offset: 25, closeOnClick: false, closeButton: false}).setHTML(`<h3>Bus ID <br>
		${bus.attributes.label}</h3>`))
		.addTo(map)
		.togglePopup();

		busStops.push(marker);	
	});

	function eraseStops(){
		if (busStops!==null) {
		for (var i = busStops.length - 1; i >= 0; i--) {
		busStops[i].remove();
		}
	}
	}

	setTimeout(eraseStops,7500)

	// timer 15 seconds not to overload system
	setTimeout(run, 15000);
}

  // Pulls API data from MBTA bus route 1
  async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;
  }

  run();