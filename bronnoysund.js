

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

	xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet.json?page=2&size=30", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		data = xhr.response["data"];

		for (id in data) {
			dataobjekt = data[id];
			console.log(dataobjekt["organisasjonsnummer"]);

		}

    // show mylist
    	for (id in data) {
    		dataobjekt = data[id];
    		var organisasjonsnummer = document.createTextNode(dataobjekt["organisasjonsnummer"]);
    		var foretaksnavn = document.createTextNode(dataobjekt["navn"]);

    		var orgformobjekt = dataobjekt["orgform"];
    		var organisasjonsform = document.createTextNode(orgformobjekt["kode"]);
    		var registrert =document.createTextNode(dataobjekt["registreringsdatoEnhetsregisteret"]);


    		add_row(main_table, organisasjonsnummer, foretaksnavn, organisasjonsform, registrert);
    }
};
xhr.send();
main_form.reset();
}

