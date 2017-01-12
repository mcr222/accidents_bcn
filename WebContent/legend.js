
function cleanValues() {
	while (legend.firstChild) {
		legend.removeChild(legend.firstChild);
	}
}

function paint_legend(){
	cleanValues();
	var marker;
	var legend = document.getElementById('legend');
	var idx = filter_variable_options.indexOf(selectedOpt);
	for (val in filter_values_options[idx]){
		var div = document.createElement('div');
		var color_div = document.createElement('div');
		var d = {};
		d[filter_variable_opcions[idx]] = filter_values_opcions[idx][val];
		
		color_div.style.backgroundColor = obtain_color(d);
		color_div.className = "legend_color";
		div.innerHTML = filter_values_options[idx][val];
		div.appendChild(color_div);
		legend.appendChild(div);
//				d3.select("div")
//				.append("svg")
//				.attr("width", 50)
//				.attr("height", 50)
//				.append("circle")
//				.attr("r", 2.5);
//				.style("fill", obtain_color);

	}
}
paint_legend();
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);


//}


//var name = type.name;
//var icon = type.icon;
//var div = document.createElement('div');
//div.innerHTML =  + name;
//legend.appendChild(div);
//}


