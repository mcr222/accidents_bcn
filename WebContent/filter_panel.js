
var variable_options = document.getElementById("filter_variable_options");
var values_options = document.getElementById("filter_values_options");
var button_add = document.getElementById("add_filter");
var filters_table_widget = document.getElementById("filters_table");


button_add.addEventListener("click",addFilter);

variable_options.addEventListener("change", selectedValueVariable);
var option;
for(var i=0;i<filter_variable_options.length;++i) {
	option = document.createElement("option");
	option.value = filter_variable_opcions[i];
	option.text = filter_variable_options[i];
	variable_options.add(option);
}

var row = filters_table_widget.insertRow();
row.id = "header";
var cell0 = row.insertCell(0);
cell0.innerHTML = "Variable";
var cell1 = row.insertCell(1);
cell1.innerHTML = "Keep values (&&)";
var cell2 = row.insertCell(2);
cell2.innerHTML = "";

var idx=0;
fillValuesOptions();

function selectedValueVariable(){
	var variable = variable_options.value;
	idx = filter_variable_opcions.indexOf(variable);
	fillValuesOptions();
}

function fillValuesOptions() {
	cleanValuesOptions();
	var checkbox_values;
	var values = filter_values_options[idx];
	var valors = filter_values_opcions[idx];
	for(var j=0;j<values.length;++j) {
		var checkbox_values = document.createElement("input");
		checkbox_values.type = "checkbox";
		checkbox_values.id = valors[j];
		checkbox_values.value = filter_variable_opcions[idx];
		var label = document.createElement('label')
		label.appendChild(document.createTextNode(values[j]));
		var container = document.createElement("div");
		container.appendChild(checkbox_values);
		container.appendChild(label);
		values_options.appendChild(container);
	}
}

function cleanValuesOptions() {
	while (values_options.firstChild) {
	    values_options.removeChild(values_options.firstChild);
	}
}

function addFilter() {
	var children = values_options.children;
	var selected_values = [];
	var variable_selected;
	for(var j=0;j<children.length;++j) {
		var child = children[j].children[0];
		if(child.checked) {
			selected_values.push(child.id);
			variable_selected = child.value;
		}
	}

	if(selected_values.length!=0){
		addRow(variable_selected,selected_values);
		fillValuesOptions();
	}
	
}

var filter_table={};

function addRow(variable, values) {
	var length = Object.keys(filter_table).length;
	filter_table[variable+values] = [variable,values];
	if(length<Object.keys(filter_table).length) {
		var row = filters_table_widget.insertRow(-1);
		row.id = "row"+variable+values;
		var button_close = document.createElement("button");
		button_close.id = variable+values;
		button_close.className = "close_button";
		button_close.innerHTML = "x";
		button_close.addEventListener("click",removeFilter);
		var cell0 = row.insertCell(0);
		cell0.innerHTML = translate(variable);
		var cell1 = row.insertCell(1);
		trans_vals=[];
		for(var j=0;j<values.length;++j) {
			trans_vals[j]=(translate(values[j]));
		}
		cell1.innerHTML = trans_vals;
		var cell2 = row.insertCell(2);
		cell2.appendChild(button_close);
	}
	console.log(filter_table);
	paint_points_in_map();
}

function removeFilter() {
	var row = document.getElementById("row"+this.id);
    row.parentNode.removeChild(row);
    delete filter_table[this.id];
	console.log(filter_table);
	paint_points_in_map();
}



