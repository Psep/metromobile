/**
 * Carga los contenidos del mapa según sean
 * sus coordenadas.
 * 
 * @param {Object} lat
 * @param {Object} lon
 */
function loadMapa(lat, lon) {
	var map = null;
	var valida = true;
	document.getElementById('mapdiv').innerHTML = '';
	document.getElementById('mapdiv').setAttribute("style","width:100%; height: 100%;");

	if (lat == null) {
		lat = '-33.4436624';
		valida = false;
	}

	if (lon == null) {
		lon = '-70.6479653';
		valida = false;
	}

	map = new OpenLayers.Map("mapdiv");
	map.addLayer(new OpenLayers.Layer.OSM());

	epsg4326 = new OpenLayers.Projection("EPSG:4326");
	projectTo = map.getProjectionObject();

	var lonLat = new OpenLayers.LonLat(lon, lat).transform(epsg4326, projectTo);

	var zoom = 15;
	map.setCenter(lonLat, zoom);

	if (valida) {
		var vectorLayer = new OpenLayers.Layer.Vector("Overlay");

		var feature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(lon, lat).transform(epsg4326, projectTo), {
			description : ''
		}, {
			externalGraphic : 'images/marker.png',
			graphicHeight : 21,
			graphicWidth : 25,
			graphicXOffset : -12,
			graphicYOffset : -25
		});
		vectorLayer.addFeatures(feature);

		map.addLayer(vectorLayer);
	}
}

/**
 * Captura la geolocalización del dispositivo
 * y llama a la función para cargar el mapa.
 */
function getGeolocation() {
	var output = document.getElementById('mapdiv');

	if (!navigator.geolocation) {
		output.innerHTML = "<p>Existen problemas de geolocalización con tu dispositivo</p>";
		return;
	}

	function success(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		loadMapa(latitude, longitude);
	};

	function error() {
		loadMapa(null, null);
		alert("Localización desconocida");
	};

	loadMapa(null, null);

	navigator.geolocation.getCurrentPosition(success, error);
}
