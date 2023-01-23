"use strict";
const buttonForm2 = document.getElementById("next-button");
buttonForm2.addEventListener("click", (event) => {
    event.preventDefault();
    const select = document.querySelector("select");
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkbox.length > 0 && select.value !== "default") {
        const resourcesList = [...checkbox].map((checkbox) => checkbox.value);
        const newUserInfos = {
            investmentMethod: select.value,
            resourcesList,
        };
        const userInfos = localStorage.getItem("userInfos") || {};
        // Verifica se o objeto do localstorage não é vazio
        if (JSON.stringify(userInfos) !== "{}") {
            const oldUserInfos = JSON.parse(`${userInfos}`);
            localStorage.setItem("userInfos", JSON.stringify(Object.assign(Object.assign({}, oldUserInfos), newUserInfos)));
        }
        else {
            localStorage.setItem("userInfos", JSON.stringify(newUserInfos));
        }
        location.href = "./form-page3.html";
    }
    else {
        alert("Please, select an option to continue");
    }
});
