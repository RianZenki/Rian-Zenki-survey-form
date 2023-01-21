const textarea = document.getElementById("user-exp")! as HTMLTextAreaElement;
const buttonForm3 = document.getElementById("next-button")!;

textarea.addEventListener("input", (_: Event) => {
	const counter = document.querySelector(".counter")!;

	const maxLength = textarea.maxLength;
	const charactersAmount = textarea.value.length;

	const charactersRemaining = maxLength - charactersAmount;
	counter.textContent = `Characters remaining: ${charactersRemaining}`;
});

buttonForm3.addEventListener("click", (event: Event) => {
	event.preventDefault();

	if (textarea.value.length > 0) {
		const userInfos = localStorage.getItem("userInfos") || {};

		// Verifica se o objeto do localstorage não é vazio
		if (JSON.stringify(userInfos) !== "{}") {
			const oldUserInfos = JSON.parse(`${userInfos}`);
			localStorage.setItem(
				"userInfos",
				JSON.stringify({ ...oldUserInfos, userExp: textarea.value })
			);
		} else {
			localStorage.setItem(
				"userInfos",
				JSON.stringify({ userExp: textarea.value })
			);
		}

		location.href = "./form-page4.html";
	} else {
		alert("Please fill the input form");
	}
});
