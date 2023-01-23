"use strict";
const button = document.querySelector("button");
button.addEventListener("mouseover", (event) => {
    if (event.target instanceof HTMLButtonElement) {
        event.target.innerText = "Just Go Ahead";
    }
});
button.addEventListener("mouseout", (event) => {
    if (event.target instanceof HTMLButtonElement) {
        event.target.innerText = "Let's go";
    }
});
