var datafile = "ACCIDENTS_GU_BCN_2015.csv";
var map = new google.maps.Map(d3.select("#main_map").node(), {
	center: {lat:41.3851, lng: 2.2000},
	zoom: 11,
	mapTypeControlOptions: {
		mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
		             'styled_map']
	}
});
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');
var overlay;
// Load the station data. When the data comes back, create an overlay.
function paint_points_in_map() {
	console.log("painting google maps");
	if(overlay!=null) {
		overlay.setMap(null);
	}

	d3.csv(datafile, function(error, data) {
		//Here data contains all data
	  if (error) throw error;
	  overlay = new google.maps.OverlayView();

	  // Add the container when the overlay is added to the map.
	  overlay.onAdd = function() {
	    var layer = d3.select(this.getPanes().overlayLayer).append("div")
	        .attr("class", "stations");
	
	    // Draw each marker as a separate SVG element.
	    // We could use a single SVG, but what size would it have?
	    overlay.draw = function() {
	      var projection = this.getProjection(),
	          padding = 15;
	
	      var marker = layer.selectAll("svg")
	          .data(d3.entries(data))
	          .each(transform) // update existing markers
	        .enter().append("svg")
	          .each(transform)
	          .attr("class", "marker");
	
	      // Add a circle.
	      marker.append("circle")
	          .attr("cx", padding)
	          .attr("cy", padding)
	          .style("fill", obtain_color)
	          .attr("r", obtain_size);
	          
	      
	    
	      // Add a label.
	      /*marker.append("svg:title")
	          .attr("x", padding+10  )
	          .attr("y", padding )
	          .attr("dy", ".31em")
	          .text(function(d) { return "aaaaa"; });*/
		
	      function transform(d) {
	    	if(filter_data_row(d)) {	    		
		        d = new google.maps.LatLng(d.value.Lat,d.value.Long);
		        d = projection.fromLatLngToDivPixel(d);
		        return d3.select(this)
		            .style("left", (d.x-padding) + "px")//-28 , +48
		            .style("top", (d.y-padding) + "px");
	    	}
	    	return null;
	      }
	    };
	  };
	
	  overlay.onRemove = function(){
		  d3.selectAll(".marker").remove();
		};
	
		
	  // Bind our overlay to the map…
	  overlay.setMap(map);
	});
}
