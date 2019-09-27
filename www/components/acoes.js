// This is a JavaScript file
document.addEventListener("offline", onOffline, false);

function onOffline() {
	navigator.notification.alert("Sem conexão por favor conectar a uma rede");
	navigator.notification.beep(3);
	navigator.vibrate(6000);
}


//localização
$(document).on("click", "#local", function () {
	// onSuccess Callback
	// This method accepts a Position object, which contains the
	// current GPS coordinates
	//
	var onSuccess = function (position) {
		navigator.notification.beep(1);
		var latitude = position.coords.latitude,
			longitude = position.coords.longitude;
		L.mapquest.key = 'hDt2rKLhaNc15yMsEqYfF7Hh3boARL0R';

		var map = L.mapquest.map('map', {
			center: [latitude, longitude],
			layers: L.mapquest.tileLayer('map'),
			zoom: 12
		});

		map.addControl(L.mapquest.control());
		/*navigator.notification.alert(
		      'Latitude: '          + position.coords.latitude          + '\n' +
		      'Longitude: '         + position.coords.longitude         + '\n' +
		      'Altitude: '          + position.coords.altitude          + '\n' +
		      'Accuracy: '          + position.coords.accuracy          + '\n' +
		      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		      'Heading: '           + position.coords.heading           + '\n' +
		      'Speed: '             + position.coords.speed             + '\n' +
		      'Timestamp: '         + position.timestamp                + '\n');*/
	};

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		navigator.notification.alert(
			'code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

});