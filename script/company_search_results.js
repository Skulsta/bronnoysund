
/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

var results = [];


// prepare the link
main_bilder = document.createElement("section");
main_bilder.className = "main_bilder";

movieCounter = 0;

function addMoviePicture() {

	left = document.getElementById("left");	

	addMovieLink();
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

function numberSearch() {

}


window.onload = function() {

	query_params = get_query_string_parameters();

	search_results = movies_object;


	if (query_params.main_search) {
		main_search = document.getElementById("main_search");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		mainSearch();
	}

	addMoviePicture();

	console.log("WOO!")
}

	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 