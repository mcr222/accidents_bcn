var filtering_functions_array = [time_filter,discrete_filters];
//filters return true if data row must be kept
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
	if(date.getTime()< earliestDate.getTime() || latestDate.getTime()< date.getTime()) {
		return false;
	}
	return true;
	
}

function equalStrings(str1,str2){
	if(str1!=null && str2!=null) {
		return str1.toLowerCase()==str2.toLowerCase();
	}
	return false;
}

function discrete_filters(d) {
	var data = d.value;
	if(data==null) {
		data = d;
	}
	var filter;
	var keep = true;
	for(var key in filter_table) {
		filter = filter_table[key];
		var accepted_values=filter[1];
		var in_keep_filter = false;
		for(var i=0;i<accepted_values.length;++i) {
			in_keep_filter = in_keep_filter || equalStrings(data[filter[0]],accepted_values[i]);
		}
		keep = keep && in_keep_filter;
	}
	return keep;
}

