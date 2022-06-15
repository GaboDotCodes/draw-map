import distanceTwoPoints from "./distanceTwoPoints";
import polygonContains from "./polygonContains";
console.log(distanceTwoPoints(5.080947,-75.469360,5.071422,-75.606113));

window.addEventListener('DOMContentLoaded', () => {
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 5.0687821, lng: -75.5186627 },
      zoom: 13,
    });

    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYGON,
        ],
      },
    });
  
    drawingManager.setMap(map);
  
    google.maps.event.addListener(drawingManager, 'polygoncomplete', function(event) {
      const latLongs = event.getPath().getArray().map(element => [ element.lat(), element.lng() ] );
      console.log(latLongs);
      const contains = polygonContains(latLongs, [ marker.position.lat(), marker.position.lng() ]);
      console.log(marker? contains : 'Define a marker');
    });

    let marker = null;

    function placeMarker(location) {
    if ( marker ) {
      marker.setPosition(location);
    } else {
      marker = new google.maps.Marker({
      position: location,
      map: map
      });
    }
    }

    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });
  }
  
  window.initMap = initMap;
})
