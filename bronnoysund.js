

/** Skulle kunne søke på forskjellige kategorier */
var input = document.querySelector("input[name = 'search']");


var knapp = document.getElementById("searchbutton");
var main_table = document.getElementById("main_data_table");

function add_row(table, organisasjonsnummer, foretaksnavn, organisasjonsform, registrert) {
	new_row = document.createElement("TR");
	organisasjonsnummer_cell = document.createElement("TD");
	organisasjonsnummer_cell.appendChild(organisasjonsnummer);
	new_row.appendChild(organisasjonsnummer_cell);
	
	foretaksnavn_cell = document.createElement("TD");
	foretaksnavn_cell.appendChild(foretaksnavn);
	new_row.appendChild(foretaksnavn_cell);

	organisasjonsform_cell = document.createElement("TD");
	organisasjonsform_cell.appendChild(organisasjonsform);
	new_row.appendChild(organisasjonsform_cell);

	registrert_cell = document.createElement("TD");
	registrert_cell.appendChild(registrert);
	new_row.appendChild(registrert_cell);
	
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

