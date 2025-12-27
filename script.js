const inputSelect = document.getElementById("unit");
const outputSelect = document.getElementById("unit2");
const convertBtn = document.getElementById("convert");
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    const inputValue = Number(inputEl.value);
    const inputUnit = inputSelect.value;
    const outputUnit = outputSelect.value;

    let result;

    if (inputUnit === outputUnit) {
        result = inputValue;
    } 

    // ===== CELSIUS =====
    else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        result = (inputValue * 9 / 5) + 32;
    } 
    else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        result = inputValue + 273.15;
    } 
    else if (inputUnit === "celsius" && outputUnit === "reamur") {
        result = inputValue * 4 / 5;
    }

    // ===== FAHRENHEIT =====
    else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        result = (inputValue - 32) * 5 / 9;
    } 
    else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        result = (inputValue - 32) * 5 / 9 + 273.15;
    } 
    else if (inputUnit === "fahrenheit" && outputUnit === "reamur") {
        result = (inputValue - 32) * 4 / 9;
    }

    // ===== KELVIN =====
    else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        result = inputValue - 273.15;
    } 
    else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9 / 5 + 32;
    }
    else if (inputUnit === "kelvin" && outputUnit === "reamur") {
        result = (inputValue - 273.15) * 4 / 5;
    }

    // ===== REAMUR =====
    else if (inputUnit === "reamur" && outputUnit === "celsius") {
        result = inputValue * 5 / 4;
    }
    else if (inputUnit === "reamur" && outputUnit === "fahrenheit") {
        result = (inputValue * 9 / 4) + 32;
    }
    else if (inputUnit === "reamur" && outputUnit === "kelvin") {
        result = (inputValue * 5 / 4) + 273.15;
    }

    outputEl.value = result.toFixed(2);
});
