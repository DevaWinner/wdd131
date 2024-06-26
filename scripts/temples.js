document.addEventListener("DOMContentLoaded", function () {
	const currentYear = new Date().getFullYear();
	document.getElementById("currentyear").textContent = currentYear;

	const lastModified = document.lastModified;
	document.getElementById(
		"lastModified"
	).textContent = `Last modification: ${lastModified}`;

	const hamburger = document.getElementById("hamburger");
	const navMenu = document.getElementById("nav-menu");

	hamburger.addEventListener("click", function () {
		navMenu.classList.toggle("show");
		hamburger.textContent = hamburger.textContent === "✕" ? "☰" : "✕";
	});
});
