

function add_row(table, left, right) {
    new_row = document.createElement("TR");
    left_cell = document.createElement("TD");
    left_cell.appendChild(left);
    new_row.appendChild(left_cell);
    
    right_cell = document.createElement("TD");
    right_cell.appendChild(right);
    new_row.appendChild(right_cell);
    
    table.appendChild(new_row);
}


//Legger til forside bilde
function addMoviePicture() {
            movie_id = query_params.id;
            item_link = document.createElement("A");

            link_pic = document.createElement('img');
            

            var src = 'https://uncrate.com/p/2017/07/bo-light.jpg';
            link_pic.src = src;
            link_pic.id = "cover"

            item_link.appendChild(link_pic);

            /* Want to put the picture somewhere else on the site? Edit results to your id here. */
            forsideBilde.appendChild(item_link); 
}


/** The movie description.*/
    function description() {
        var description = document.createElement("p");
        content = navn;
        
        if (content == null) {
            content = " [ Ingen beskrivelse ] ";
        }
        else {
            description.textContent = content;
            movie.appendChild(description);
        }
    }


window.onload = function() {

	query_params = get_query_string_parameters().id;
	console.log(query_params);

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet/" + query_params + ".json", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		navn = xhr.response["navn"];


    console.log(navn);



    console.log("WOO!");

	console.log()


	addMoviePicture();
	description();
	
};
xhr.send();
}