function panic(message) {
    // window.history.back();
    alert(message);
}

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
            // movie_id = query_params.id;
            item_link = document.createElement("A");

            link_pic = document.createElement('img');
            

            /* var pic_id = 0;
            if (movie_id > 1000) 
                pic_id = movie_id.toString().charAt(0);
            */
            

            var src = 'https://www.thomsonreuters.com/content/dam/ewp-m/images/thomsonreuters/en/video-stills/the-answer-co-2017-video-screen-shot-2.jpg.transform/rect-1536/q90/image.jpg';
            link_pic.src = src;
            link_pic.id = "cover"

            item_link.appendChild(link_pic);

            /* Want to put the picture somewhere else on the site? Edit results to your id here. */
            // forsideBilde.appendChild(item_link); 
}

//Viser trailer på filmsiden, viser bilde om trailer ikke er tilgjengelig.

/*
function trailer() {
    var movie_details = movies_object[movie_id];
    var trailerId = movie_details["youtube trailer id"];

    if(trailerId == "") {

        movie_id = query_params.id;
        item_link = document.createElement("A");

        link_pic = document.createElement('img');
            

        var pic_id = 0;
        if (movie_id > 1000) 
        pic_id = movie_id.toString().charAt(0);
            

        var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + 'b.jpg';
        link_pic.src = src;
        link_pic.id = "cover"

        item_link.appendChild(link_pic);

        forsideBilde.appendChild(item_link); 
        }
        else {
            var video = document.createElement("iframe");

            video.id = "trailer"
            video.src = "https://www.youtube.com/embed/" + trailerId;

            player.appendChild(video);
    }
}

/** The movie description.*/
    function description() {
        var company_details = dataobject;
        var description = document.createElement("p");
        content = company_details["navn"];
        
        if (content == null) {
            content = " [ Ingen beskrivelse ] ";
        }
        else {
            description.textContent = content;
            movie.appendChild(description);
        }
    }

    /** skriver ut skuespillere til en film.*/
    function skuespillere() {
        var movie_details = movie_object;
        var skuespillere = document.createElement("p");
        content = movie_details["folk"];
        
        if (content == null) {
            content = " [ Ingen beskrivelse ] ";
        }
        else {
            skuespillere.textContent = content;
            folk.appendChild(skuespillere);
        }
    }

    //Viser snittkarakter på filmsiden
    function karakter() {
        var rating = 0;
        /** Retrieves rating from reviews.js. */
        for (var key in reviews_object) {
            if (key == query_params.id) {
            if (!reviews_object.hasOwnProperty(key)) continue;

            var object = reviews_object[key];
            for (var property in object) {
            if (!object.hasOwnProperty(property)) continue;

            userinfo = object[property];

            if (userinfo["rating"]) {
            rating = (userinfo["rating"]);
            } 
            }
            }
        }
        ratingItem = document.createTextNode(" " + rating + "/6");

        review.appendChild(ratingItem);
    }

//Viser brukernavn, vurdering, dato og kommentar på filmsiden.
/*
function anmeldelser() {
    for (var key in reviews_object) {
        if (key == movie_id) {
            if (!reviews_object.hasOwnProperty(key)) continue;


                var object = reviews_object[key];
                for (var property in object) {
                    if (!object.hasOwnProperty(property)) continue;

                        userinfo = object[property];

                        if (userinfo["rating"]) {
                            rating = (userinfo["rating"]);
                        }

                        if (userinfo["username"]) {
                            username = (userinfo["username"]);
                        }

                        if (userinfo["mod_date"]) {
                            date = (userinfo["mod_date"]);
                        }

                        if (userinfo["comment"] != "") {
                            comment = (userinfo["comment"]);
                            paragraf = document.createElement("p");
                            tekst = document.createTextNode("kommentar: " + comment);
                            paragraf.appendChild(tekst);
                        } else {
                            paragraf = document.createElement("p");
                            comment = document.createTextNode("Ingen kommentar");
                            paragraf.appendChild(comment);
                        }

                        var kommentar = document.getElementById("kommentar");
                        var br = document.createElement('br');

                        var ratingItem = document.createTextNode(username + "'s rating: " + rating + "/6" + " ");
                        kommentar.appendChild(br);
                        var dato = document.createTextNode("Skrevet: " + date);
                        kommentar.appendChild(br);
                        
                        kommentar.appendChild(ratingItem);

                        kommentar.appendChild(dato);

                        kommentar.appendChild(paragraf);
                }
                
        }
    }
}


/*
function trailer() {
    var movie_id = movies_object[movie_id];
    var trailerId = movie_id["youtube trailer id"];
    var video = document.createElement("iframe");

    video.id = "trailer"
    video.src = "https://www.youtube.com/embed/" + trailerId;

    player.appendChild(video);
}
**/

window.onload = function() {

    console.log("WOO!");

    query_params = get_query_string_parameters();
    if (!query_params.id) {
        panic("No id given");
        return;
    }


    
    // get the movie_object from the "database" movies_object
    // data_object = dataobjekt[query_params.id];
    // if (!data_object) {
	// panic("Could not retrieve movie_object!");
	// return;
    }

    
    // get the genre info (if it exists)
    // genre_object = genres_object[query_params.id];
    // get the review info (if it exists)
    // review_object = reviews_object[query_params.id];
    
    
    // render page
    var title_element = document.getElementById("otitle");
    // title_element.appendChild(document.createTextNode(movie_object["otitle"]));    
    // title_element.innerHTML = movie_object["otitle"];


    // add a "debug-table" on the bottom showing all elements from movie_object
    /*stats_table = document.getElementById("movie");
    for (key in movie_object) {
        left = document.createTextNode(key);
        right = document.createTextNode(movie_object[key]);
        add_row(stats_table, left, right);
    }**/
    
    //Henter ut rating fra review.js
    // tekst = document.createTextNode(":  " + genre_object);
    document.getElementById("genre");
    // genre.appendChild(tekst);


    // add a "debug-table" on the bottom showing all genre info
   /* genre_table = document.getElementById("genre");
    for (var i in genre_object) {
		left = document.createTextNode(i);
		right = document.createTextNode(genre_object);
		add_row(genre_table, left, right);
    }
    **/

    // review object debug-table
    
    /*
    review_table = document.getElementById("kommentar");
    for (key in review_object) {
	left = document.createTextNode(key);
	right = document.createTextNode(review_object[key]);
	add_row(review_table, left, right);
	for (subkey in review_object[key]) {
	    left = document.createTextNode(subkey);
	    right = document.createTextNode(review_object[key][subkey]);
	    add_row(review_table, left, right);
	}
    }
    **/

    addMoviePicture();
    // trailer();
    description();
    skuespillere();
    karakter();
    anmeldelser();

