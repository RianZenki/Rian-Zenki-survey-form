"use strict";
const buttonForm = document.getElementById("next-button");
buttonForm.addEventListener("click", (event) => {
    event.preventDefault();
    const radioButton = document.querySelector('input[name="markets"]:checked');
    const select = document.querySelector("select");
    if (radioButton && select.value) {
        location.href = "./form-page2.html";
    }
    else {
        alert("Select one option to continue");
    }
});
