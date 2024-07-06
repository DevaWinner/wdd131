document.addEventListener("DOMContentLoaded", () => {
	const currentYear = new Date().getFullYear();
	document.getElementById("currentyear").textContent = currentYear;

	const lastModified = document.lastModified;
	document.getElementById("modified-date").textContent = lastModified;

	const temperature = 25; // °C
	const windSpeed = 10; // km/h

	function calculateWindChill(temp, wind) {
		if (temp <= 10 && wind > 4.8) {
			return (
				(
					13.12 +
					0.6215 * temp -
					11.37 * Math.pow(wind, 0.16) +
					0.3965 * temp * Math.pow(wind, 0.16)
				).toFixed(1) + " °C"
			);
		}
		return "N/A";
	}

	const windChill = calculateWindChill(temperature, windSpeed);
	document.getElementById("windchill").textContent = windChill;
});
