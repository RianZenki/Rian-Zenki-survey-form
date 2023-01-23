"use strict";
const buttonForm4 = document.getElementById("next-button");
buttonForm4.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    if (!name) {
        alert("Please, fill the name field");
        return;
    }
    if (!email ||
        email.indexOf("@") <= 0 ||
        email.lastIndexOf(".") <= email.indexOf("@") + 1) {
        alert("Please insert a valid email address");
        return;
    }
    if (!age || +age < 0 || +age > 120) {
        alert("Please, insert an age between 0 and 120");
        return;
    }
    const newUserInfos = {
        name,
        email,
        age: +age,
    };
    const userInfos = localStorage.getItem("userInfos") || {};
    if (JSON.stringify(userInfos) !== "{}") {
        const oldUserInfos = JSON.parse(`${userInfos}`);
        localStorage.setItem("userInfos", JSON.stringify(Object.assign(Object.assign({}, oldUserInfos), newUserInfos)));
    }
    else {
        localStorage.setItem("userInfos", JSON.stringify(newUserInfos));
    }
    localStorage.clear();
    location.href = "../index.html";
});
