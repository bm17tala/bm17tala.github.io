function validateEmail() {
    let isValid = false;
    const emailAddress = document.getElementById("emailField").value;
    //set the textContent of emailError as empty string.
    const emailError = document.getElementById("emailError");
    emailError.textContent = "";

    if (emailAddress === "" || !emailAddress.includes("@siena")) {
        //set the content in emailError to "Please enter a valid email address";
        emailError.textContent = "Please enter a valid email address";
    } else {
        isValid = true;
        console.log("Email is valid: ", emailAddress);

    }

    if (isValid) {
        // This submitRequest is a custom function that will be called when everything is valid
        console.log("valid");
        submitRequest();
    }
}

document.getElementById("submit-btn").addEventListener("submit", () => {
    e.preventDefault();
    submitRequest();
});
