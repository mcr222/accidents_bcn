var filter_variable_options = ["Week day",
                               "Day part",
                               "Neighborhood",
                               "Pedestrian cause",
                               "Deaths",
                               "Minor injuries",
                               "Serious injuries",
                               "Vehicles involved"];
var filter_variable_opcions = ["Descripcio dia setmana",
                               "Descripcio torn",
                               "Nom districte",
                               "Descripcio causa vianant",
                               "Numero de morts",
                               "Numero de lesionats lleus",
                               "Numero de lesionats greus",
                               "Numero de vehicles implicats"];

var dictionary_translate = {"Descripcio dia setmana":"Week day",
		"Descripcio torn":"Day part",
		"Nom districte":"Neighborhood",
		"Descripcio causa vianant":"Pedestrian cause",
		"Numero de morts":"Deaths",
		"Numero accidents":"Accidents",
		"Numero de lesionats lleus":"Minor injuries",
		"Numero de lesionats greus":"Serious injuries",
		"Hora de dia":"Hour",
		"Dia de mes":"Day",
		"Numero de vehicles implicats":"Vehicles involved",
		"Dilluns":"Monday",
		"Dimarts":"Tuesday",
		"Dimecres":"Wednesday",
		"Dijous":"Thursday",
		"Divendres":"Friday",
		"Dissabte":"Saturday",
		"Diumenge":"Sunday",
		"Mati":"Morning",
		"Tarda":"Afternoon",
		"Nit":"Night",
		'Transitar a peu per la calsada':'Walking on the carriageway',
		'Desobeir altres senyals':'Disobey other traffic signs',
		'No es causa del  vianant':'Not pedestrian fault' ,
		'Desobeir el senyal del semafor':'Disobey traffic light',
		'Creuar per fora pas de vianants':'Crossing outside pedestrian crossing',
		'Altres':'Others',
};

function translate(str_catalan) {
	if (dictionary_translate[str_catalan]!=null)
		return dictionary_translate[str_catalan];
	else 
		return(str_catalan)
}

var filter_values_options = [["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                             ["Morning","Afternoon","Night"],
                             ['Gracia', 'Ciutat Vella' , 'Eixample' , 'Unknown' , 'Sant Andreu' , 'Sants-Montjuic' , 'Sant Marti' , 'Les Corts' , 'Horta-Guinardo' , 'Sarria-Sant Gervasi' , 'Nou Barris'],
                             ['Walking on the carriageway', 'Disobey other traffic signs', 'Not pedestrian fault', 'Disobey traffic light', 'Crossing outside pedestrian crossing', 'Others'],
                             ['0','1','3'],
                             ['0','1','2','3','4','5','6','7','8','9','11'],
                             ['0','1','2','3'],
                             ['0','1','2','3','4','5','6','7','8','9','10','11','12']];

var filter_values_opcions = [["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge"],
                             ["Mati","Tarda","Nit"],
                             ['Gracia', 'Ciutat Vella' , 'Eixample' , 'Desconegut' , 'Sant Andreu' , 'Sants-Montjuic' , 'Sant Marti' , 'Les Corts' , 'Horta-Guinardo' , 'Sarria-Sant Gervasi' , 'Nou Barris'],
                             ['Transitar a peu per la calsada', 'Desobeir altres senyals', 'No es causa del  vianant', 'Desobeir el senyal del semafor', 'Creuar per fora pas de vianants', 'Altres'],
                             ['0','1','3'],
                             ['0','1','2','3','4','5','6','7','8','9','11'],
                             ['0','1','2','3'],
                             ['0','1','2','3','4','5','6','7','8','9','10','11','12']];

