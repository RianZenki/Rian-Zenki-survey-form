const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("mouseover", (event: Event) => {
	if (event.target instanceof HTMLButtonElement) {
		event.target.innerText = "Just Go Ahead";
	}
});

button.addEventListener("mouseout", (event: Event) => {
	if (event.target instanceof HTMLButtonElement) {
		event.target.innerText = "Let's go";
	}
});
