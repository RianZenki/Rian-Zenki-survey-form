"use strict";
const buttonForm2 = document.getElementById("next-button");
buttonForm2.addEventListener("click", (event) => {
    event.preventDefault();
    const checkbox = document.querySelector('input[type="checkbox"]:checked');
    const select = document.querySelector("select");
    if (checkbox && select.value) {
        location.href = "./form-page3.html";
    }
    else {
        alert("Select one option to continue");
    }
});
