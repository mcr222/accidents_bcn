var selectedOpt = document.querySelector('input[name="group1"]:checked').value;
var radios = document.querySelectorAll('input[name="group1"]');

function changeHandler(event) {
	selectedOpt=this.value;
	paint_points_in_map();
}

Array.prototype.forEach.call(radios, function(radio) {
	radio.addEventListener('change', changeHandler);
});

function obtain_values(d){
	var data = d.value;
	if(data==null) {
		data = d;
	}
	return data;
}

var colorsWeekdays=["red", "white", "blue", "green", "yellow", "brown", "orange"];
var colorsPedestrianCause=["red", "white", "blue", "green", "yellow", "orange"];
var colorsDayPart=["red", "white", "blue"];
var colorsNeihgborhoods=["black","red", "white", "blue", "green", "yellow", "orange",
                         "grey", "pink", "brown","purple" ];
var codiBarris=[-1,1,2,3,4,5,6,7,8,9,10];
var colours = ["#6363FF", "#6373FF", "#63A3FF", "#63E3FF", "#63FFFB", "#63FFCB",
               "#63FF9B", "#63FF6B", "#7BFF63", "#BBFF63", "#DBFF63", "#FBFF63", 
               "#FFD363", "#FFB363", "#FF8363", "#FF7363", "#FF6364"];

var heatmapColour = d3.scaleLinear()
.domain(d3.range(0, 1, 1.0 / (colours.length - 1)))
.range(colours);

var c;

function obtain_color(d){
	var data=obtain_values(d);
	if (selectedOpt==null){
		return "white";
	}
	switch(selectedOpt) {
	case "Deaths":
		c=d3.scaleLinear().domain([0,3]).range([0,1]);
		return heatmapColour(c(data["Numero de morts"]));	
		break;
	case "Minor injuries":
		c=d3.scaleLinear().domain([0,11]).range([0,1]);
		return heatmapColour(c(data["Numero de lesionats lleus"]));
		break;
	case "Serious injuries":
		c=d3.scaleLinear().domain([0,3]).range([0,1]);
		return heatmapColour(c(data["Numero de lesionats greus"]));
	case "Neighborhood":
		c=d3.scaleOrdinal().domain(codiBarris).range(colorsNeihgborhoods);
		return c(data["Codi districte"]);
		break;
	case "Week day":
		c=d3.scaleOrdinal().domain(filter_values_opcions[0]).range(colorsWeekdays);
		return c(data["Descripcio dia setmana"]);
	case "Day part":
		c=d3.scaleOrdinal().domain(filter_values_opcions[1]).range(colorsDayPart);
		return c(data["Descripcio torn"]);
	case "Pedestrian cause":
		c=d3.scaleOrdinal().domain(filter_values_opcions[3]).range(colorsPedestrianCause);
		return c(data["Descripcio causa vianant"]);
	default:
	} 
}
