//Challenge
//A function to accept a fahrenheit temperate and return a object containing celsius, kelvin

let convertFahrenheit = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = (fahrenheit + 459.67) * 5/9
    return {
        TempinFahrenheit: fahrenheit,
        TempinCelsius : celsius,
        TempinKelvin : kelvin
    }
}

let result = convertFahrenheit(50);
console.log(result);
console.log(`Temp in celsius is ${result.TempinCelsius}`);
console.log(`Temp in kelvin is ${result.TempinKelvin}`);

let checkObjects = function(kelvin) {
    console.log(kelvin);
}
checkObjects(result.TempinKelvin);