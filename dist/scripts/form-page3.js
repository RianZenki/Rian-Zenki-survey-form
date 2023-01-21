"use strict";
const textarea = document.getElementById("user-exp");
const buttonForm3 = document.getElementById("next-button");
textarea.addEventListener("input", (_) => {
    const counter = document.querySelector(".counter");
    const maxLength = textarea.maxLength;
    const charactersAmount = textarea.value.length;
    const charactersRemaining = maxLength - charactersAmount;
    counter.textContent = `Characters remaining: ${charactersRemaining}`;
});
buttonForm3.addEventListener("click", (event) => {
    event.preventDefault();
    if (textarea.value.length > 0) {
        const userInfos = localStorage.getItem("userInfos") || {};
        // Verifica se o objeto do localstorage não é vazio
        if (JSON.stringify(userInfos) !== "{}") {
            const oldUserInfos = JSON.parse(`${userInfos}`);
            localStorage.setItem("userInfos", JSON.stringify(Object.assign(Object.assign({}, oldUserInfos), { userExp: textarea.value })));
        }
        else {
            localStorage.setItem("userInfos", JSON.stringify({ userExp: textarea.value }));
        }
        location.href = "./form-page4.html";
    }
    else {
        alert("Please fill the input form");
    }
});
