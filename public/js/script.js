var form = document.getElementById('formID'); // form has to have ID: <form id="formID">
form.noValidate = true;
form.addEventListener('submit', function (event) { // listen for form submitting
    if (!event.target.checkValidity()) {
        event.preventDefault(); // dismiss the default functionality
        document.getElementById('message').classList.remove("hidden");
    }
}, false);

// input to track
var naam = document.getElementById("naam");
var nummertje = document.getElementById("nummertje");
var selection = document.getElementById("selection")
if (sessionStorage.getItem("autosave")) {
    // Restore a content of the input
    naam.value = sessionStorage.getItem("autosave");
}

if (sessionStorage.getItem("autosave2")) {
    // Restore a content of the input
    nummertje.value = sessionStorage.getItem("autosave2");
}

if (sessionStorage.getItem("autosavee")) {
    // Restore a content of the input
    selection.value = sessionStorage.getItem("autosave3");
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

selection.addEventListener("change", function () {
    // save value into sessionStorage object 
    sessionStorage.setItem("autosave3", selection.value);
});

console.log(sessionStorage.getItem("autosave"))
console.log(sessionStorage.getItem("autosave2"))
console.log(sessionStorage.getItem("autosave3"))