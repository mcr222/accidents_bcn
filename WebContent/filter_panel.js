var filter_variable_options = [//"Day description",
                               "Week day",
                               "Day part"];
var filter_variable_opcions = [//"Descripcio tipus dia",
                               "Dia setmana",
                               "Descripcio torn"];

var filter_values_options = [//["Working","Holiday"],
            ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            ["Morning","Afternoon","Night"]];

var filter_values_opcions = [//["Laborable","Festiu"],
             ["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge"],
             ["Mati","Tarda","Nit"]];

var variable_options = document.getElementById("filter_variable_options");
var values_options = document.getElementById("filter_values_options");
var button_add = document.getElementById("add_filter");

button_add.addEventListener("click",addFilter);

variable_options.addEventListener("change", selectedValueVariable);
var option;
for(var i=0;i<filter_variable_options.length;++i) {
	option = document.createElement("option");
	option.value = filter_variable_opcions[i];
	option.text = filter_variable_options[i];
	variable_options.add(option);
}

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

function addRow(variable, values) {
	console.log(values);
	console.log(variable);
}
