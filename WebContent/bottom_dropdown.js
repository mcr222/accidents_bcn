var dropdown_menu = document.getElementById("bottom_chart_options");
dropdown_menu.addEventListener("change",selectedValue);
var opcions = ["Accidents","Deaths","Minor injuries",
               "Serious injuries","Vehicles involved"];
var options = ["Numero accidents","Numero de morts","Numero de lesionats lleus", 
               "Numero de lesionats greus", "Numero de vehicles implicats"];
var option;

for(var i=0;i<options.length;++i) {
	option = document.createElement("option");
	option.value = options[i];
	option.text = opcions[i];
	dropdown_menu.add(option);
}

var dropdown_menu_selected = dropdown_menu.value;

function selectedValue(){
	dropdown_menu_selected = dropdown_menu.value;
	paint_bottom_bar_chart();
}