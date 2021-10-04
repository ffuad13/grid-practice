/* Menu toggle */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
	nav.classList.toggle("slide");
});

/* color theme */
let theme = document.getElementsByClassName("theme")[0];
document.getElementById("toggler").checked = false;

document.getElementById("toggler").addEventListener("change", (event) => {
	event.target.checked
		? theme.setAttribute("data-theme", "dark")
		: theme.removeAttribute("data-theme");
});
