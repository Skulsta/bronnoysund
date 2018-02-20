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

/* One big, terrible switch statement to create and add data to
the correct location in companypage.html. */
    function all_info() {

        for (var key in object) {
            var property = object[key];
            switch (key) {
                case "organisasjonsnummer":
                var description = document.createElement("p");
                    description.textContent = object[key];
                    orgnr.appendChild(description);
                    break;
                case "navn":
                var description = document.createElement("p");
                    description.textContent = object[key];
                    navn.appendChild(description);
                    break;
                case "organisasjonsform":
                    var description = document.createElement("p");
                    description.textContent = object[key];
                    orgform.appendChild(description);
                    break;
                case "forretningsadresse":
                    var description = document.createElement("p");
                    var value = object[key];
                    description.textContent = value["adresse"];
                    adresse.appendChild(description);

                    var description = document.createElement("p");
                    var value = object[key];
                    description.textContent = value["postnummer"] + " " + value["poststed"];
                    postnummer.appendChild(description);

                    var description = document.createElement("p");
                    var value = object[key];
                    description.textContent = value["kommunenummer"] + " " + value["kommune"];
                    kommune.appendChild(description);

                    var description = document.createElement("p");
                    var value = object[key];
                    description.textContent = value["land"];
                    land.appendChild(description);
                    break;
                case "maalform":
                    var description = document.createElement("p");
                    description.textContent = object[key];
                    malform.appendChild(description);
                    break;
                case "registreringsdatoEnhetsregisteret":
                    var description = document.createElement("p");
                    description.textContent = object[key];
                    enhetsregisteret.appendChild(description);
                    break;
                case "stiftelsesdato":
                    var description = document.createElement("p");
                    description.textContent = object["stiftelsesdato"];
                    stiftelsesdato.appendChild(description);
                    break;
                case "naeringskode1":
                    var description = document.createElement("p");
                    var value = object[key];
                    description.textContent = value["kode"] + " " + value["beskrivelse"];
                    naeringskode1.appendChild(description);
                    break;
                case "institusjonellSektorkode":
                    var description = document.createElement("p");
                    var value = object[key];
                    description.textContent = value["kode"] + " " + value["beskrivelse"];
                    institusjonellSektorkode.appendChild(description);
                    break;
                case "frivilligRegistrertIMvaregisteret":
                    var description = document.createElement("p");
                    description.textContent = object["frivilligRegistrertIMvaregisteret"];
                    frivilligmva.appendChild(description);
                    break;
                case "sisteInnsendteAarsregnskap":
                    var description = document.createElement("p");
                    description.textContent = object["sisteInnsendteAarsregnskap"];
                    aarsregnskap.appendChild(description);
                    break;
                case "antallAnsatte":
                    var description = document.createElement("p");
                    description.textContent = object["antallAnsatte"];
                    ansatte.appendChild(description);
                    break;
                case "hjemmeside":
                    var description = document.createElement("a");
                    var linkText = document.createTextNode("Hjemmeside");
                    description.appendChild(linkText);
                    description.href = "https://" + object["hjemmeside"];
                    hjemmeside.appendChild(description);
                    break;
                default:
                    break;
            }
        }
    }

    /* If a given company is registered in any of the four
    possible registers, it gets added to the company page. */
    function registers() {
        var value = object["registrertIMvaregisteret"];
        if(value === "J") {
            var description = document.createElement("p");
            description.textContent = "Frivillighetsregisteret";
            registre.appendChild(description);
        }

        value = object["registrertIForetaksregisteret"];
        if(value === "J") {
            var description = document.createElement("p");
            description.textContent = "Merverdiavgiftsregisteret";
            registre.appendChild(description);
        }

        value = object["registrertIForetaksregisteret"];
        if(value === "J") {
            var description = document.createElement("p");
            description.textContent = "Foretaksregisteret";
            registre.appendChild(description);
        }

        value = object["registrertIStiftelsesregisteret"];
        if(value === "J") {
            var description = document.createElement("p");
            description.textContent = "Stiftelsesregisteret";
            registre.appendChild(description);
        }
    }

    
    function displayBankrupt() {
        value = object["konkurs"];
        if(value === "J") {
            var description = document.createElement("p");
            description.textContent = "konkurs!";
            konkurs.appendChild(description);
            description.style.color = "red";
        }
    }
    


window.onload = function() {
    query_params = get_query_string_parameters().id;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://data.brreg.no/enhetsregisteret/enhet/" + query_params + ".json", true);
    xhr.responseType = "json";
    xhr.onload = function() {
        object = xhr.response;


    all_info();
    registers();
    displayBankrupt();
    
};
xhr.send();
}