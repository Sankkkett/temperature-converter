function convertToCelsius() {
  const celsius = parseFloat(document.getElementById("celsiusinput").value);
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheitResult").textContent = fahrenheit.toFixed(2);
}

function convertTofahrenheit() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheitinput").value);
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsiusResult").textContent = celsius.toFixed(2);
}

function convertToKelvin() {
  const celsius = parseFloat(document.getElementById("celsiusToKelvininput").value);
  const kelvin = celsius + 273.15;
  document.getElementById("kelvinResult").textContent = kelvin.toFixed(2);
}