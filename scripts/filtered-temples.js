const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	},
	{
		templeName: "Bern Switzerland",
		location: "Zollikofen, Switzerland",
		dedicated: "1955, September, 11",
		area: 35546,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-12662-main.jpg",
	},
	{
		templeName: "Billings Montana",
		location: "Billings, United States",
		dedicated: "1999, November, 20",
		area: 33800,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-8805-main.jpg",
	},
	{
		templeName: "Durban South Africa",
		location: "KwaZulu-Natal South Africa",
		dedicated: "2020, February, 16",
		area: 19860,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg",
	},
];

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

	const album = document.getElementById("album");

	const generateTempleCard = (temple) => {
		const figure = document.createElement("figure");
		const img = document.createElement("img");
		img.src = temple.imageUrl;
		img.alt = temple.templeName;
		img.loading = "lazy";
		const figcaption = document.createElement("figcaption");
		figcaption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
    `;
		figure.appendChild(img);
		figure.appendChild(figcaption);
		album.appendChild(figure);
	};

	const displayTemples = (filterFn) => {
		album.innerHTML = "";
		temples.filter(filterFn).forEach(generateTempleCard);
	};

	const filterFns = {
		old: (temple) => {
			const year = parseInt(temple.dedicated.split(", ")[0], 10);
			return year < 1900;
		},
		new: (temple) => {
			const year = parseInt(temple.dedicated.split(", ")[0], 10);
			return year > 2000;
		},
		large: (temple) => temple.area > 90000,
		small: (temple) => temple.area < 10000,
		all: () => true,
	};

	navMenu.addEventListener("click", (event) => {
		if (event.target.tagName === "A") {
			event.preventDefault();
			const filter = event.target.getAttribute("data-filter");
			displayTemples(filterFns[filter] || filterFns.all);
		}
	});

	displayTemples(filterFns.all);
});
