document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Footer dynamic current year and last modified date
    const currentYearSpan = document.getElementById('current-year');
    const lastModifiedSpan = document.getElementById('last-modified');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // 2. Windchill calculation function (Standard WDD 131 metric requirement)
    const tempElement = document.getElementById('temp-value');
    const windElement = document.getElementById('wind-value');
    const windchillElement = document.getElementById('windchill-value');

    if (tempElement && windElement && windchillElement) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        // Metric wind chill parameters: Temperature <= 10°C and Wind Speed > 4.8 km/h
        if (temp <= 10 && wind > 4.8) {
            const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
            windchillElement.textContent = `${windChill.toFixed(1)} °C`;
        } else {
            windchillElement.textContent = 'N/A';
        }
    }
});