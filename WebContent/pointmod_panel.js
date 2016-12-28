/**
 * 
 */
//var selectedVal = document.querySelector('input[name="group1"]:checked').value;

//alert('You selected: ' + selectedVal);
var count=0;
function plot_point(marker, padding){
//	Add a circle.
	marker.append("circle")
	.attr("r", 1.5)
	.attr("cx", padding)
	.attr("cy", padding)
	.style("fill", function(d) { return  "white"; });
	count++;
	console.log(count);
}




//var values
//Número de morts	Número de lesionats lleus	Número de lesionats greus

var color_selection_array = [color_selection];
var number_colors_selected = color_selection_array.length;






function select_color_data_row(d) {
	//return true if data row d does not want to be filtered
	for (var i=0;i<number_colors_selected;i++) {
		//if any of the filters is false then row is filtered
		if(!color_selection_array[i](d)) {
			return false;
		}
	}
	//if all filters are true then data row is not filtered
	return true;
}
function color_selection(d) {
	var date = obtain_Date(d);
	if( date.getTime()< earliestDate.getTime() || latestDate.getTime()< date.getTime()) {
		return false;
	}
	return true;
	
}
