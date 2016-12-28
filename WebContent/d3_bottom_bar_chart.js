var svg = d3.select("#bottom_bar_chart").append("svg"),
    margin = {top: 20, right: 20, bottom: 110, left: 40},
    margin2 = {top: 10, right: 20, bottom: 10, left: 10},
    width = 1250 - margin.left - margin.right,
    height = 60 - margin.top - margin.bottom,
    height2 = 50 - margin2.top - margin2.bottom;

var dateBuckets = [];
currentDate = minimumDate;
i=0;
while(currentDate.getTime()<maximumDate.getTime()) {
	currentDate = new Date(currentDate.getTime()+7*86400000);
	dateBuckets[i] = {};
	dateBuckets[i].date = currentDate;
	dateBuckets[i].total = 0;
	i+=1;
}
//console.log(dateBuckets);

svg.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom);


var x2 = d3.scaleTime().range([0, width]),
    y2 = d3.scaleLinear().range([height2, 0]);

var xAxis2 = d3.axisBottom(x2)
				.ticks(20);

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
  data.forEach(function(d) {
	  dataDateTime=obtain_Date(d).getTime();
	  for(var i = 0; i<dateBuckets.length; ++i){
		  if(dateBuckets[i].date.getTime()>=dataDateTime) {
			  dateBuckets[i].total += 1;			
			  break;
		  }
	  }
  
	});
	
	
  x2.domain(d3.extent(dateBuckets, function(d) { return d.date; }));
  y2.domain([0, d3.max(dateBuckets, function(d) { return d.total; })]);

  context.append("path")
      .datum(dateBuckets)
      .attr("class", "area")
      .attr("d", area2);

  context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

  context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x2.range());
});

var timer;

function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
  var s = d3.event.selection || x2.range();
  var range = s.map(x2.invert, x2);
  earliestDate = range[0];
  latestDate = range[1];

  if(timer!=null) {
	  window.clearTimeout(timer);
  }

  timer = window.setTimeout(paint_points_in_map,500);
  
}