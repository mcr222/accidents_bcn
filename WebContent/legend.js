
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
function changeHandler(event) {
	selectedOpt=document.querySelector('input[name="group1"]:checked').value;
	paint_legend();
}

Array.prototype.forEach.call(radios, function(radio) {
	radio.addEventListener('change', changeHandler);
});
function cleanValues() {
	while (legend.firstChild) {
		legend.removeChild(legend.firstChild);
	}
}
function paint_legend(d){
	cleanValues()
	var marker;
	var legend = document.getElementById('legend');
	var selectedVar;
	for(var i=0;i<filter_variable_options.length;++i) {
		selectedVar=filter_variable_options[i];
		if (selectedVar==selectedOpt){
			for (val in filter_values_options[i]){
				var div = document.createElement('div');
				div.innerHTML = filter_values_options[i][val];
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
	}
}
paint_legend();
//}


//var name = type.name;
//var icon = type.icon;
//var div = document.createElement('div');
//div.innerHTML =  + name;
//legend.appendChild(div);
//}


