
//var selectedVal = document.querySelector('input[name="group1"]:checked').value;

//alert('You selected: ' + selectedVal);
var count=0;
function obtain_values(d){
	var data = d.value;
	if(data==null) {
		data = d;
	}
	return data;
}

function obtain_color(d){
	var data=obtain_values(d);
	if (data["Numero de morts"]>0){
		return  "blue";   
	}
	else if(data["Numero de lesionats greus"]>0){
		return "black";
	}
	else if(data["Numero de lesionats lleus"]==0){
		return "white";
	}
	else if(data["Numero de lesionats lleus"]==2){
		return "yellow";
	}
	else if(data["Numero de lesionats lleus"]==1){
		return "red";
	}
	else if(data["Numero de lesionats lleus"]==3){
		return "green";
	}
	else return "purple";
}
//var values
//Número de morts	Número de lesionats lleus	Número de lesionats greus
/*
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
	var deaths = obtain_deaths(d);
	if( deaths==null) {
		return false;
	}
	return true;

}


 */