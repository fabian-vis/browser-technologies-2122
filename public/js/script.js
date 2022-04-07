var form = document.getElementById('formID'); // form has to have ID: <form id="formID">
form.noValidate = true;
form.addEventListener('submit', function (event) { // listen for form submitting
    if (!event.target.checkValidity()) {
        form.classList.add('checker')
        event.preventDefault(); // dismiss the default functionality
        document.getElementById('messageP').innerText = "Je hebt nog niet het hele formulier ingevuld of je hebt een te hoog getal ingevuld."
    }
}, false);


if (typeof (Storage) !== "undefined") {
    // input to track
    var naam = document.getElementById("naam");
    var nummertje = document.getElementById("nummertje");
    if (sessionStorage.getItem("autosave")) {
        // Restore a content of the input
        naam.value = sessionStorage.getItem("autosave");
    }

    if (sessionStorage.getItem("autosave2")) {
        // Restore a content of the input
        nummertje.value = sessionStorage.getItem("autosave2");
    }


    // Listen for changes in the input field
    naam.addEventListener("change", function () {
        // save value into sessionStorage object 
        sessionStorage.setItem("autosave", naam.value);
    });

    nummertje.addEventListener("change", function () {
        // save value into sessionStorage object 
        sessionStorage.setItem("autosave2", nummertje.value);
    });
} else {
    // No web storage Support.
}