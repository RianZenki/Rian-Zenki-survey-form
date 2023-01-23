const buttonForm = document.getElementById("next-button")!;

buttonForm.addEventListener("click", (event: Event) => {
	event.preventDefault();

	const radioButton = document.querySelector(
		'input[name="markets"]:checked'
	) as HTMLInputElement | undefined;
	const select = document.querySelector("select")!;

	if (radioButton && select.value !== "default") {
		const userInfos = {
			market: radioButton.value,
			accountStatus: select.value,
		};

		localStorage.setItem("userInfos", JSON.stringify(userInfos));

		location.href = "./form-page2.html";
	} else {
		alert("Please, select an option to continue");
	}
});
