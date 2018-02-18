
/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

var results = [];

var counter = 0;


// prepare the link
main_bilder = document.createElement("section");
main_bilder.className = "main_bilder";

movieCounter = 0;

function addMoviePicture() {

	left = document.getElementById("left");	

	// addMovieLink();
	left.appendChild(main_bilder);
	movieCounter++;
}


/* Methods for each search field. Using toUpperCase to make searches case insencitive
function mainSearch() {

	for (movie_id in movies_object) {
		if (movieCounter < 14) {
			movie_details = movies_object[movie_id];
			if ((movie_details["otitle"].toUpperCase()).includes(query_params.main_search.toUpperCase()))
				addMoviePicture();
		}
	}
}
*/

function realMainSearch() {
	for (id in data) {
		if (movieCounter < 14) {
            company_details = data[id];
            if ((company_details["navn"].toUpperCase()).includes(query_params.main_search.toUpperCase()))
				addMoviePicture();
        }
    }
}

/* Methods for each search field. Using toUpperCase to make searches case insencitive */
function mainSearch() {

	for (var i in object) {
		if (counter < 14) {
			console.log(i);
			var company_details = object[i];

			if ((company_details["navn"].toUpperCase()).includes(query_params["search"].toUpperCase()))
				console.log("JAAA");
			console.log(company_details);
		}
	}
}


window.onload = function() {




	query_params = get_query_string_parameters();
	console.log(query_params["search"].toUpperCase());


	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet.json?$filter=startswith%28navn%2C%27" + query_params["search"] + "%27%29", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		object = xhr.response["data"];


    console.log(object);



    console.log("WOO!");

	console.log()

	// search_results = movies_object;


		main_search = document.getElementById("search");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		console.log("Hei");
		mainSearch();
	


	
};
xhr.send();
}

	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 