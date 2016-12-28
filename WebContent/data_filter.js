var filtering_functions_array = [time_filter];
var number_filtering_functions = filtering_functions_array.length;

function filter_data_row(d) {
	//return true if data row d does not want to be filtered
	for (var i=0;i<number_filtering_functions;i++) {
		//if any of the filters is false then row is filtered
		if(!filtering_functions_array[i](d)) {
			return false;
		}
	}
	//if all filters are true then data row is not filtered
	return true;
}

function obtain_Date(d){
	var data = d.value;
	if(data==null) {
		data = d;
	}
	return new Date(data["NK Any"],data["Mes de any"],data["Dia de mes"],data["Hora de dia"],0,0,0);
}

var minimumDate = new Date(2015,0,0,0,0,0,0);
var maximumDate =  new Date(2016,2,0,0,0,0,0);
console.log(minimumDate);
console.log(maximumDate);


var earliestDate = minimumDate;
var latestDate = maximumDate;

function time_filter(d) {
	var date = obtain_Date(d);
	if( date.getTime()< earliestDate.getTime() || latestDate.getTime()< date.getTime()) {
		return false;
	}
	return true;
	
}