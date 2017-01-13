var datafile = "ACCIDENTS_GU_BCN_2015.csv";
var map = new google.maps.Map(d3.select("#main_map").node(), {
	center: {lat:41.3851, lng: 2.2000},
	zoom: 11,
	mapTypeControl: false,
	streetViewControl: false,
	scaleControl: true
	//mapTypeControlOptions: {
		//mapTypeIds: ['roadmap']
	//}
	//mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
	//             'styled_map']
//	}
});
//map.mapTypes.set('styled_map', styledMapType);
//map.setMapTypeId('styled_map');
var overlay;
var markers = [];
var totalVal = {"Numero accidents":0,"Numero de morts":0,"Numero de lesionats lleus":0, 
        "Numero de lesionats greus":0, "Numero de vehicles implicats":0};
var total_value_text = document.getElementById("totalValue");
	
//Load the station data. When the data comes back, create an overlay.
function paint_points_in_map() {
	console.log("painting google maps");
	totalVal = {"Numero accidents":0,"Numero de morts":0,"Numero de lesionats lleus":0, 
	        "Numero de lesionats greus":0, "Numero de vehicles implicats":0};
	total_value_text.innerHTML = 0;
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

				var panes = this.getPanes();
				var marker = layer.selectAll("svg")
				.data(d3.entries(data).filter(filter_data_row))
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

				/*console.log(marker);
	      this.getPanes().overlayMouseTarget.appendChild();
		  google.maps.event.addDomListener(this.circle, 'mouseover', function(){ alert('mouseover') });
				 */
				// Add a label.
				/*marker.append("svg:title")
	          .attr("x", padding+10  )
	          .attr("y", padding )
	          .attr("dy", ".31em")
	          .text(function(d) { return "aaaaa"; });*/

				function transform(d) {  
					if(dropdown_menu_selected=="Numero accidents") {
			    		  totalVal["Numero accidents"] += 1;	
					  } else if(!isNaN(d.value[dropdown_menu_selected])) {
						  totalVal[dropdown_menu_selected] += parseInt(d.value[dropdown_menu_selected]);
					  }
			  		total_value_text.innerHTML = totalVal[dropdown_menu_selected];
					
					var size = obtain_size(d);
					d = new google.maps.LatLng(d.value.Lat,d.value.Long);
					d = projection.fromLatLngToDivPixel(d);

					//var div = document.createElement('div');
					//console.log(d3.select(this));

					/*var div = d3.select(this)._groups[0][0].cloneNode(true);
	        div.style.backgroundColor = "black";
        	//div.style.left = (d.x-size/2) + "px";
        	//div.style.top = (d.y-size/2) + "px";
	        //div.style.width = size+"px";
	        //div.style.height= size+"px";
	        panes.overlayMouseTarget.appendChild(div);
			google.maps.event.addDomListener(div, 'mouseover', function(d){ 
				console.log(d);
				alert('mouseover') });*/

					return d3.select(this)
					.style("left", (d.x-padding) + "px")//-28 , +48
					.style("top", (d.y-padding	) + "px");
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
