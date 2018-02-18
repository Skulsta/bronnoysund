    function get_all_info() {
    	for (var key in object) {
    		var value = object[key];
    		console.log(value);
    		document.write("<br> - " + key + ": " + getValue(value));
			}
		}


	function getValue(value) {
		if (typeof value !== 'object' && value !== null)
			return value;


		for (var key in value){
    				var newValue = value[key];
    				return newValue;
    			}
	}


	function setData(data) {
		switch (data) {
			case "navn":
				var txt = document.createTextNode("Navn");
				break;
			case "stiftelsesdato":
				var txt = document.createTextNode("Stiftelsesdato");
				break;
			default:
				var txt = document.createTextNode(data);


		}
	}


window.onload = function() {

	query_params = get_query_string_parameters().id;
	console.log(query_params);

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet/" + query_params + ".json", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		object = xhr.response;


    console.log(object);



    console.log("WOO!");

	console.log()


	for (var i in object) {
  		var table = document.getElementById("apps");
  		var tr = document.createElement("tr");
  		var td = document.createElement("td");

  		var valueTr = document.createElement("tr");
  		var valueTd = document.createElement("td");

  		var data = getValue(i);
  		var category = setData(data);
  		var txt = document.createTextNode(category);

  		var txtValue = document.createTextNode(getValue(data));
  
  		for (var key in object[i]) {
    		// var txt = document.createTextNode(key);
    		td.appendChild(txt);
    		tr.appendChild(td);
    		valueTd.appendChild(txtValue);
    		tr.appendChild(valueTd);
  		}

  		table.appendChild(tr);
	}


	
};
xhr.send();
}