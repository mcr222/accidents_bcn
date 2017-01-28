var x2,y2;

function paint_bottom_bar_chart(){
	
	console.log("painting bottom_bar_chart");
	var chart = d3.select("#bottom_bar_chart").select("svg");
	if(chart!=null) {	
		chart.remove();
	}
	
	var svg = d3.select("#bottom_bar_chart").append("svg"),
	    margin = {top: 20, right: 20, bottom: 110, left: 40},
	    margin2 = {top: 20, right: 20, bottom: 30, left: 30},
	    width = 820 - margin.left - margin.right,
	    height = 160 - margin.top - margin.bottom,
	    height2 = 160 - margin2.top - margin2.bottom;
	
	var dateBuckets = [];
	currentDate = minimumDate;
	i=0;
	while(currentDate.getTime()<maximumDate.getTime()) {
		currentDate = new Date(currentDate.getTime()+1*86400000);
		dateBuckets[i] = {};
		dateBuckets[i].date = currentDate;
		dateBuckets[i].total = 0;
		i+=1;
	}
	//console.log(dateBuckets);
	
	svg.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom);
	
	
	x2 = d3.scaleTime().range([0, width]);
	y2 = d3.scaleLinear().range([height2, 0]);
	
	var xAxis2 = d3.axisBottom(x2)
					.ticks(d3.timeMonth, 1)
					  .tickFormat(d3.timeFormat("%b %y"));

	
	var brush = d3.brushX()
	    .extent([[0, 0], [width, height2]])
	    .on("brush end", brushed);
	
	var area2 = d3.area()
	    .curve(d3.curveMonotoneX)
	    .x(function(d) { return x2(d.date); })
	    .y0(height2)
	    .y1(function(d) { return y2(d.total); });
	
	var context = svg.append("g")
	    .attr("class", "context")
	    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");
	
	d3.csv(datafile, function(error, data) {
	  if (error) throw error;
	
	//Process the data to build the stacked bar data
	  data.filter(filter_data_row_no_time).forEach(function(d) {  		
		  dataDateTime=obtain_Date(d).getTime();
		  for(var i = 0; i<dateBuckets.length; ++i){
			  if(dateBuckets[i].date.getTime()>=dataDateTime) {
				  if(dropdown_menu_selected=="Numero accidents") {
					  dateBuckets[i].total += 1;	
				  } else {
					  dateBuckets[i].total += parseInt(d[dropdown_menu_selected]);
				  }
				  
				  break;
			  }
		  }
	  
		});
	  

	  x2.domain(d3.extent(dateBuckets, function(d) { return d.date; }));
	  y2.domain([0, d3.max(dateBuckets, function(d) { return d.total; })]);

	  var yAxis2 = d3.axisLeft(y2).tickValues([0, d3.max(dateBuckets, function(d) { return d.total; })])
	  	.tickFormat(d3.format("d"));
	  
	  context.append("path")
	      .datum(dateBuckets)
	      .attr("class", "area")
	      .attr("d", area2);
	
	  context.append("g")
	      .attr("class", "axis axis--x")
	      .attr("transform", "translate(0," + height2 + ")")
	      .call(xAxis2);
	

	  context.append("g")
	      .attr("class", "axis axis--y")
	      .attr("transform", "translate(0," + 0 + ")")
	      .call(yAxis2);
	  
	  svg.append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 0)
	      .attr("x",-75)
	      .attr("dy", "1em")
	      .style("text-anchor", "middle")
	      .text(translate(dropdown_menu_selected));    
	  
	  context.append("g")
	      .attr("class", "brush")
	      .call(brush)
	      .call(brush.move, x2.range());
	});
}

paint_bottom_bar_chart();
	
var timer;

function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
  var s = d3.event.selection || x2.range();
  var range = s.map(x2.invert, x2);

  rangeUpdate(range[0],range[1]);
}

var late_date_text = document.getElementById("maxDate");
var early_date_text = document.getElementById("minDate");

function getDateString(date) {
	var str = date.toString();
	return str.substring(4,24);
}

function rangeUpdate(date1,date2){
	  earliestDate = date1;
	  latestDate = date2;
	  
	  early_date_text.innerHTML = getDateString(date1);
	  late_date_text.innerHTML = getDateString(date2);


	  if(timer!=null) {
		  window.clearTimeout(timer);
	  }

	  timer = window.setTimeout(update_charts,700);
}

