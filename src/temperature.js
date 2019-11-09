const readlineSync = require("readline-sync");

const FARENHEIT_FREEZING_POINT = 32;
const FARENHEIT_BOILING_POINT = 0;
const CELSIUS_FREEZING_POINT = 273.2;
const CELSIUS_BOILING_POINT = 212;
const KELVIN_FREEZING_POINT = 100;
const KELVIN_BOILING_POINT = 373.2;

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const userScale = (readlineSync.question("\nEnter a sclae: "))
scale = userScale.toUpperCase();

if (temperature < (Number.MIN_SAFE_INTEGER) || temperature > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.\n")
} else if (temperature <= FARENHEIT_FREEZING_POINT && (scale == "F")) {
    console.log("\nSolid.\n")
} else if (temperature > FARENHEIT_FREEZING_POINT && (temperature < FARENHEIT_BOILING_POINT) && (scale == "F")) {
    console.log("\nLiquid.\n")
} else if (temperature >= FARENHEIT_BOILING_POINT && (scale == "F")) {
    console.log("\nGas.\n")
} else if (temperature <= CELSIUS_FREEZING_POINT && (scale == "C")) {
    console.log("\nSolid.\n")
} else if (temperature > CELSIUS_FREEZING_POINT && (temperature < CELSIUS_BOILING_POINT) && (scale == "C")) {
    console.log("\nLiquid.\n")
} else if (temperature >= CELSIUS_BOILING_POINT && (scale == "C")) {
    console.log("\nGas.\n")
} else if (temperature <= KELVIN_FREEZING_POINT && (scale == "K")) {
    console.log("\nSolid.\n")
} else if (temperature > KELVIN_FREEZING_POINT && (temperature < KELVIN_BOILING_POINT) && (scale == "K")) {
    console.log("\nLiquid.\n")
} else if (temperature >= KELVIN_BOILING_POINT && (scale == "K")) {
    console.log("\nGas.\n")
} else {
    console.log("\nInvalid.\n")
}
