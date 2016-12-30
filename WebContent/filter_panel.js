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
variable_options.addEventListener("change", selectedValueVariable);
var option;
for(var i=0;i<filter_variable_options.length;++i) {
	option = document.createElement("option");
	option.value = filter_variable_opcions[i];
	option.text = filter_variable_options[i];
	variable_options.add(option);
}

fillValuesOptions(0);

function selectedValueVariable(){
	var variable = variable_options.value;
	var i= filter_variable_opcions.indexOf(variable);
	fillValuesOptions(i);
}

function fillValuesOptions(i) {
	cleanValuesOptions();
	var checkbox_values;
	var values = filter_values_options[i];
	var valors = filter_values_opcions[i];
	for(var j=0;j<values.length;++j) {
		var checkbox_values = document.createElement("input");
		checkbox_values.type = "checkbox";
		checkbox_values.value = valors[j];
		checkbox_values.name = values[j];
		var label = document.createElement('label')
		label.htmlFor = "id";
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

