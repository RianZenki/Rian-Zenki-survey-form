const buttonForm4 = document.getElementById("next-button")!;

buttonForm4.addEventListener("click", (event: Event) => {
	event.preventDefault();

	const name = (document.getElementById("name")! as HTMLInputElement).value;
	const email = (document.getElementById("email")! as HTMLInputElement).value;
	const age = (document.getElementById("age")! as HTMLInputElement).value;

	if (name && email && age) {
		const newUserInfos = {
			name,
			email,
			age: +age,
		};

		const userInfos = localStorage.getItem("userInfos") || {};

		if (JSON.stringify(userInfos) !== "{}") {
			const oldUserInfos = JSON.parse(`${userInfos}`);
			localStorage.setItem(
				"userInfos",
				JSON.stringify({ ...oldUserInfos, ...newUserInfos })
			);
		} else {
			localStorage.setItem("userInfos", JSON.stringify(newUserInfos));
		}

		localStorage.clear();
		location.href = "../index.html";
	} else {
		alert("Please fill out all the required fields");
	}
});