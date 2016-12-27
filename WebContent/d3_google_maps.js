// Create the Google Map…
var styledMapType = new google.maps.StyledMapType([
                                                   {
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#ebe3cd"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#523735"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "elementType": "labels.text.stroke",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#f5f1e6"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "administrative",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "administrative",
                                                	    "elementType": "geometry.stroke",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#c9b2a6"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "administrative.land_parcel",
                                                	    "elementType": "geometry.stroke",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#dcd2be"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "administrative.land_parcel",
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#ae9e90"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "administrative.neighborhood",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "landscape.natural",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#dfd2ae"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "poi",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "poi",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#dfd2ae"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "poi",
                                                	    "elementType": "labels.text",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "poi",
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#93817c"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "poi.park",
                                                	    "elementType": "geometry.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#a5b076"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "poi.park",
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#447530"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#f5f1e6"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road",
                                                	    "elementType": "labels",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road",
                                                	    "elementType": "labels.icon",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road.arterial",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#fdfcf8"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road.highway",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#f8c967"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road.highway",
                                                	    "elementType": "geometry.stroke",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#e9bc62"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road.highway.controlled_access",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#e98d58"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road.highway.controlled_access",
                                                	    "elementType": "geometry.stroke",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#db8555"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "road.local",
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#806b63"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "transit",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "transit.line",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#dfd2ae"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "transit.line",
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#8f7d77"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "transit.line",
                                                	    "elementType": "labels.text.stroke",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#ebe3cd"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "transit.station",
                                                	    "elementType": "geometry",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#dfd2ae"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "water",
                                                	    "elementType": "geometry.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#b9d3c2"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "water",
                                                	    "elementType": "labels.text",
                                                	    "stylers": [
                                                	      {
                                                	        "visibility": "off"
                                                	      }
                                                	    ]
                                                	  },
                                                	  {
                                                	    "featureType": "water",
                                                	    "elementType": "labels.text.fill",
                                                	    "stylers": [
                                                	      {
                                                	        "color": "#92998d"
                                                	      }
                                                	    ]
                                                	  }
                                                	],
                                                	{name:'Styled Map'});

var map = new google.maps.Map(d3.select("#map").node(), {
	center: {lat:41.3851, lng: 2.2000},
	zoom: 11,
	mapTypeControlOptions: {
		mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
		             'styled_map']
	}
});

map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');
// Load the station data. When the data comes back, create an overlay.
d3.csv("ACCIDENTS_GU_BCN_2015.csv", function(error, data) {
	
  if (error) throw error;

  var overlay = new google.maps.OverlayView();

  // Add the container when the overlay is added to the map.
  overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayLayer).append("div")
        .attr("class", "stations");

    // Draw each marker as a separate SVG element.
    // We could use a single SVG, but what size would it have?
    overlay.draw = function() {
      var projection = this.getProjection(),
          padding = 5;

      var marker = layer.selectAll("svg")
          .data(d3.entries(data))
          .each(transform) // update existing markers
        .enter().append("svg")
          .each(transform)
          .attr("class", "marker");

      // Add a circle.
      marker.append("circle")
          .attr("r", 2.5)
          .attr("cx", padding)
          .attr("cy", padding);
/*
      // Add a label.
      marker.append("text")
          .attr("x", padding+10  )
          .attr("y", padding )
          .attr("dy", ".31em")
          .text(function(d) { return d.key; });
*/		
      function transform(d) {
        d = new google.maps.LatLng(d.value.Lat,d.value.Long);
        d = projection.fromLatLngToDivPixel(d);
        return d3.select(this)
            .style("left", (d.x) + "px")//-28 , +48
            .style("top", (d.y ) + "px");
        
      }
    };
  };

  // Bind our overlay to the map…
  overlay.setMap(map);
});
