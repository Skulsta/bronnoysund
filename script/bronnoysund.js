

/** Skulle kunne søke på forskjellige kategorier */
var input = document.querySelector("input[name = 'search']");


var knapp = document.getElementById("searchbutton");
var main_table = document.getElementById("main_data_table");

function add_row(table, organisasjonsnummer, foretaksnavn, organisasjonsform, stiftelsesdato) {
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

	stiftelsesdato_cell = document.createElement("TD");
	stiftelsesdato_cell.appendChild(stiftelsesdato);
	new_row.appendChild(stiftelsesdato_cell);
	
	table.appendChild(new_row);
}

function display_companies(data) {
    	for (id in data) {
    		dataobjekt = data[id];
    		var organisasjonsnummer = document.createTextNode(dataobjekt["organisasjonsnummer"]);

    		var foretaksnavn = document.createElement("a");
    		var linkText = document.createTextNode(dataobjekt["navn"]);
    		foretaksnavn.appendChild(linkText);
    		foretaksnavn.title = dataobjekt["navn"];
    		foretaksnavn.href = "companypage.html?id=" + dataobjekt["organisasjonsnummer"];
    		document.body.appendChild(foretaksnavn);

    		var adresseobjekt = dataobjekt["forretningsadresse"];
    		var poststed = document.createTextNode(adresseobjekt["poststed"]);
    		var stiftelsesdato =document.createTextNode(dataobjekt["stiftelsesdato"]);


    		add_row(main_table, organisasjonsnummer, foretaksnavn, poststed, stiftelsesdato);
    }
}


window.onload = function() {


	query_params = get_query_string_parameters();


	if (query_params.search) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet.json?$filter=startswith%28navn%2C%27" + query_params["search"] + "%27%29", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		data = xhr.response["data"];

	
	display_companies(data);
	

};
xhr.send();
}
}
