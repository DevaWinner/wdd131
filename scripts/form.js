document.addEventListener("DOMContentLoaded", () => {
	const products = [
		{ id: 1, name: "Solar Lamp" },
		{ id: 2, name: "Solar Fan" },
		{ id: 3, name: "Solar Inverter" },
		{ id: 4, name: "Solar Panel" },
		{ id: 5, name: "Solar Water Heater" },
		{ id: 6, name: "Solar Water Pump" },
		{ id: 7, name: "Solar Street Light" },
		{ id: 8, name: "Solar Lantern" },
		{ id: 9, name: "Solar Home Lighting System" },
		{ id: 10, name: "Solar Mobile Charger" },
	];

	const productSelect = document.getElementById("productName");

	if (productSelect) {
		products.forEach((product) => {
			const option = document.createElement("option");
			option.value = product.name;
			option.textContent = product.name;
			productSelect.appendChild(option);
		});
	}

	if (window.location.pathname.includes("review.html")) {
		let reviewCount = localStorage.getItem("reviewCount") || 0;
		reviewCount++;
		localStorage.setItem("reviewCount", reviewCount);
		document.getElementById("reviewCount").textContent = reviewCount;
	}
});
