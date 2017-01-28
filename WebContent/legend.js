
function cleanValues() {
	while (legend.firstChild) {
		legend.removeChild(legend.firstChild);
	}
}

function paint_legend(){
	cleanValues();
	var marker;
	var legend = document.getElementById('legend');
	legend.appendChild(color_options);
	var legend_content = document.createElement('table');
	legend_content.id = "legend_content";
	legend.appendChild(legend_content);
	var idx = filter_variable_options.indexOf(selectedOpt);
	
	
	for (val in filter_values_options[idx]){
		var d = {};
		d[filter_variable_opcions[idx]] = filter_values_opcions[idx][val];
		var row = legend_content.insertRow(-1);
		row.className = "rowLegend"
		var cell0 = row.insertCell(0);
		circle_legend = document.createElement('div');
		circle_legend.style.backgroundColor = obtain_color(d);
		circle_legend.id = "circle_legend";
		cell0.appendChild(circle_legend);
		var cell1 = row.insertCell(1);
		cell1.innerHTML = filter_values_options[idx][val];
	}
}
paint_legend();
map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);


//}


//var name = type.name;
//var icon = type.icon;
//var div = document.createElement('div');
//div.innerHTML =  + name;
//legend.appendChild(div);
//}


