var main_table = document.getElementById("main_data_table");


function add_row(table, organisasjonsnummer, foretaksnavn, organisasjonsform, registreringsdatoEnhetsregisteret) {
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

	registreringsdatoEnhetsregisteret_cell = document.createElement("TD");
	registreringsdatoEnhetsregisteret_cell.appendChild(registreringsdatoEnhetsregisteret);
	new_row.appendChild(registreringsdatoEnhetsregisteret_cell);
	
	table.appendChild(new_row);
}


function isBankrupt(dataobjekt) {
		if(dataobjekt === "J")
			return true;
	}


function display_companies() {
    	for (id in data) {
    		dataobjekt = data[id];
    		var organisasjonsnummer = document.createTextNode(dataobjekt["organisasjonsnummer"]);

    		var foretaksnavn = document.createElement("a");
    		var linkText = document.createTextNode(dataobjekt["navn"]);
    		foretaksnavn.appendChild(linkText);
    		foretaksnavn.title = dataobjekt["navn"];
    		foretaksnavn.href = "companypage.html?id=" + dataobjekt["organisasjonsnummer"];

    		document.body.appendChild(foretaksnavn);
    		if(isBankrupt(dataobjekt["konkurs"]))
    			foretaksnavn.style.color = "red";

    		var adresseobjekt = dataobjekt["forretningsadresse"];
    		if(adresseobjekt)
    			var poststed = document.createTextNode(adresseobjekt["poststed"]);
    		var registreringsdatoEnhetsregisteret =document.createTextNode(dataobjekt["registreringsdatoEnhetsregisteret"]);

    		add_row(main_table, organisasjonsnummer, foretaksnavn, poststed, registreringsdatoEnhetsregisteret);
    }
}


//creates a listener for when you press a key
window.onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputTextValue = e.target.value;

  /*
  if(e.keyCode === 13) {
    numberSearch();
  }
  */

  // Starts searching when user has typed at least three characters.
  if(inputTextValue) {
  	if (inputTextValue.length > 2)
      numberSearch();
    }
  }

      // var realValue = document.getElementById("companySearch").value;
      // window.location.href = "companypage.html?id=" + inputTextValue;


// If user input is 9 characters and all numbers, redirect directly to company page if input matches an organization number.
function numberSearch() {
  if(isNaN(inputTextValue) === false && inputTextValue.length === 9) {
    window.location.href = "companypage.html?id=" + inputTextValue;
  } else
    makeSearch();
}


  // Used to update the table when new keys are pressed.
  function removeTable() {
    var Parent = document.getElementById("main_data_table");
    while(Parent.hasChildNodes()) {
      Parent.removeChild(Parent.firstChild);
    }
  }


function makeSearch() {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet.json?$filter=startswith%28navn%2C%27" + inputTextValue + "%27%29", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		data = xhr.response["data"];

    removeTable();

		display_companies();
	}
xhr.send();
};



