const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');


function celsiusParaFahrenheit(c) {
    return (c * 9 / 5) + 32;
}


function fahrenheitParaCelsius(f) {
    return (f - 32) * 5 / 9;
}


celsiusInput.addEventListener('input', () => {
    const c = parseFloat(celsiusInput.value);
    
    if (!isNaN(c)) {
        const f = celsiusParaFahrenheit(c);
        fahrenheitInput.value = f.toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
});


fahrenheitInput.addEventListener('input', () => {
    const f = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(f)) {
        const c = fahrenheitParaCelsius(f);
        celsiusInput.value = c.toFixed(2);
    } else {
        celsiusInput.value = '';
    }
});