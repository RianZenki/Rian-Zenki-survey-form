const buttonForm2 = document.getElementById("next-button")!;

buttonForm2.addEventListener("click", (event: Event) => {
	event.preventDefault();

	const select = document.querySelector("select")!;
	const checkbox = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	)! as NodeListOf<HTMLInputElement>;

	if (checkbox.length > 0 && select.value) {
		const resourcesList = [...checkbox].map((checkbox) => checkbox.value);

		const newUserInfos = {
			investmentMethod: select.value,
			resourcesList,
		};

		const userInfos = localStorage.getItem("userInfos") || {};

		// Verifica se o objeto do localstorage não é vazio
		if (JSON.stringify(userInfos) !== "{}") {
			const oldUserInfos = JSON.parse(`${userInfos}`);
			localStorage.setItem(
				"userInfos",
				JSON.stringify({ ...oldUserInfos, ...newUserInfos })
			);
		} else {
			localStorage.setItem("userInfos", JSON.stringify(newUserInfos));
		}

		location.href = "./form-page3.html";
	} else {
		alert("Select one option to continue");
	}
});
