var margin = {top: 30, right: 0, bottom: 15, left: -50},
    width = 570 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(1),
    y = {},
    dragging = {};


var line = d3.line(),
    //axis = d3.axisLeft(x),
    background,
    foreground,
    extents;

var totalVal = {"Numero accidents":0,"Numero de morts":0,"Numero de lesionats lleus":0, 
        "Numero de lesionats greus":0, "Numero de vehicles implicats":0};
var total_value_text = document.getElementById("totalValue");

function paint_parallel_coord_chart() {
	totalVal = {"Numero accidents":0,"Numero de morts":0,"Numero de lesionats lleus":0, 
	        "Numero de lesionats greus":0, "Numero de vehicles implicats":0};
	total_value_text.innerHTML = 0;
	
	
	console.log("painting parallel chart");
	var chart = d3.select("#right_panel").select("svg");
	if(chart!=null) {	
		chart.remove();
	}
	
	var svg = d3.select("#right_panel").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	d3.csv(datafile, function(error, data_accidents) {
		  data_accidents.filter(filter_data_row).forEach(function(d) {
			  if(dropdown_menu_selected=="Numero accidents") {
	    		  totalVal["Numero accidents"] += 1;	
			  } else if(!isNaN(d[dropdown_menu_selected])) {
				  totalVal[dropdown_menu_selected] += parseInt(d[dropdown_menu_selected]);
			  }
	  		
		  
			});
		  total_value_text.innerHTML = totalVal[dropdown_menu_selected];
			
		
		
		
	  // Extract the list of dimensions and create a scale for each.
		//data_accidents[0] contains the header elements, then for all elements in the header
		//different than "name" it creates and y axis in a dictionary by variable name
	  x.domain(dimensions = d3.keys(data_accidents[0]).filter(function(d) {
		if(d!="Numero de lesionats lleus" && d!="Numero de lesionats greus" && d!="Numero de vehicles implicats"
			&& d!="Numero de morts" && d!="Hora de dia") {
			return false;
		}
	    return y[d] = d3.scaleLinear()
	        .domain(d3.extent(data_accidents, function(p) { 
	        	return +p[d]; }))
	        .range([height, 0]);
	  }));
	  
	  extents = dimensions.map(function(p) { return [0,0]; });
	  
	  // Add grey background lines for context.
	  background = svg.append("g")
	      .attr("class", "background")
	    .selectAll("path")
	      .data(data_accidents.filter(filter_data_row))
	    .enter().append("path")
	      .attr("d", path);
	
	  // Add blue foreground lines for focus.
	  foreground = svg.append("g")
	      .attr("class", "foreground")
	    .selectAll("path")
	      .data(data_accidents.filter(filter_data_row))
	    .enter().append("path")
	      .attr("d", path);
	
	  // Add a group element for each dimension.
	  var g = svg.selectAll(".dimension")
	      .data(dimensions)
	    .enter().append("g")
	      .attr("class", "dimension")
	      .attr("transform", function(d) {  return "translate(" + x(d) + ")"; })
	      .call(d3.drag()
	        .subject(function(d) { return {x: x(d)}; })
	        .on("start", function(d) {
	          dragging[d] = x(d);
	          background.attr("visibility", "hidden");
	        })
	        .on("drag", function(d) {
	          dragging[d] = Math.min(width, Math.max(0, d3.event.x));
	          foreground.attr("d", path);
	          dimensions.sort(function(a, b) { return position(a) - position(b); });
	          x.domain(dimensions);
	          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
	        })
	        .on("end", function(d) {
	          delete dragging[d];
	          transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
	          transition(foreground).attr("d", path);
	          background
	              .attr("d", path)
	            .transition()
	              .delay(500)
	              .duration(0)
	              .attr("visibility", null);
	        }));
	  // Add an axis and title.
	  g.append("g")
	      .attr("class", "axis")
	      .each(function(d) {  d3.select(this).call(d3.axisLeft(y[d]));})
	      //text does not show up because previous line breaks somehow
	    .append("text")
	      .style("text-anchor", "middle")
	      .attr("y", -9)
	      .attr("fill", "black")  
	      .text(function(d) { return translate(d); });
	
	  // Add and store a brush for each axis.
	  g.append("g")
	      .attr("class", "brush")
	      .each(function(d) {
	        d3.select(this).call(y[d].brush = d3.brushY().extent([[-8, 0], [8,height]]).on("brush start", brushstart).on("brush", brush_parallel_chart));
	      })
	    .selectAll("rect")
	      .attr("x", -8)
	      .attr("width", 16);
	});
}
	
function position(d) {
  var v = dragging[d];
  return v == null ? x(d) : v;
}

function transition(g) {
  return g.transition().duration(500);
}

// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}


// Handles a brush event, toggling the display of foreground lines.
function brush_parallel_chart() {	 
	for(var i=0;i<dimensions.length;++i){
		if(d3.event.target==y[dimensions[i]].brush) {
			extents[i]=d3.event.selection.map(y[dimensions[i]].invert,y[dimensions[i]]);
			
		}
	}
	  
	  foreground.style("display", function(d) {
	    return dimensions.every(function(p, i) {
	    	if(extents[i][0]==0 && extents[i][0]==0) {
	    		return true;
	    	}
	      return extents[i][1] <= d[p] && d[p] <= extents[i][0];
	    }) ? null : "none";
	  });
}

paint_parallel_coord_chart();

