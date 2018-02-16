

/** Skulle kunne søke på forskjellige kategorier */
var input = document.querySelector("input[name = 'search']");


var knapp = document.getElementById("searchbutton");
var main_table = document.getElementById("main_data_table");

function add_row(table, dato, beskrivelse, inn, ut) {
	new_row = document.createElement("TR");
	dato_cell = document.createElement("TD");
	dato_cell.appendChild(dato);
	new_row.appendChild(dato_cell);
	
	beskrivelse_cell = document.createElement("TD");
	beskrivelse_cell.appendChild(beskrivelse);
	new_row.appendChild(beskrivelse_cell);

	inn_cell = document.createElement("TD");
	inn_cell.appendChild(inn);
	new_row.appendChild(inn_cell);

	ut_cell = document.createElement("TD");
	ut_cell.appendChild(ut);
	new_row.appendChild(ut_cell);
	
	table.appendChild(new_row);
}

function handleClick (e) {
	var tekst = input.value;

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://skbank.azurewebsites.net/api/transaksjon", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		transaksjon = xhr.response["transaksjoner"];

		for (id in transaksjon) {
			transaksjonsobjekt = transaksjon[id];
			console.log(transaksjonsobjekt["dato"]);

		}

    // show mylist
    	for (id in transaksjon) {
    		transaksjonsobjekt = transaksjon[id];
    		var dato = document.createTextNode(transaksjonsobjekt["dato"]);
    		var beskrivelse = document.createTextNode(transaksjonsobjekt["beskrivelse"]);

    		if (transaksjonsobjekt["beloep"] > 0) {
    			var inn = document.createTextNode(transaksjonsobjekt["beloep"]);
    			var ut =document.createTextNode("");
    		}

    		else {
    			var ut = document.createTextNode(transaksjonsobjekt["beloep"]);
    			var inn =document.createTextNode("");
    		}


    		add_row(main_table, dato, beskrivelse, inn, ut);
    }
};
xhr.send();
main_form.reset();
}

