var dropdown_menu = document.getElementById("bottom_chart_options");
dropdown_menu.addEventListener("change",selectedValue);
var options = ["Accidents","Deaths","Minor injuries",
               "Serious injuries","Vehicles involved"];
var opcions = ["Numero accidents","Numero de morts","Numero de lesionats lleus", 
               "Numero de lesionats greus", "Numero de vehicles implicats"];
var option;

for(var i=0;i<options.length;++i) {
	option = document.createElement("option");
	option.value = opcions[i];
	option.text = options[i];
	dropdown_menu.add(option);
}

var dropdown_menu_selected = dropdown_menu.value;

function selectedValue(){
	dropdown_menu_selected = dropdown_menu.value;
	paint_bottom_bar_chart();
}