var form = document.getElementById('formID'); // form has to have ID: <form id="formID">
form.noValidate = true;
form.addEventListener('submit', function (event) { // listen for form submitting
    if (!event.target.checkValidity()) {
        event.preventDefault(); // dismiss the default functionality
        document.getElementById('message').classList.remove("hidden");
    }
}, false);

// input to track
var field = document.getElementById("field");
if (sessionStorage.getItem("autosave")) {
    // Restore a content of the input
    field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the input field
field.addEventListener("change", function () {
    // save value into sessionStorage object 
    sessionStorage.setItem("autosave", field.value);
});

console.log(sessionStorage.getItem("autosave"))