const readlineSync = require("readline-sync");

const firstNumber = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const secondNumber = Number(readlineSync.question(""));
const thirdNumber = Number(readlineSync.question(""));

if (firstNumber, secondNumber, thirdNumber < (Number.MIN_SAFE_INTEGER) || firstNumber, secondNumber, thirdNumber > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.\n")
} else if (firstNumber < secondNumber && secondNumber < thirdNumber){
    console.log("\nStrictly increasing.\n")
} else if (firstNumber <= secondNumber && secondNumber <= thirdNumber) {
    console.log("\nIncreasing.\n")
} else if (firstNumber == secondNumber & secondNumber == thirdNumber) {
    console.log("\nEqual.\n")
} else if (firstNumber >= secondNumber && secondNumber >= thirdNumber) {
    console.log("\nDecreasing.\n")
} else if (firstNumber > secondNumber && secondNumber > thirdNumber) {
    console.log("\nStrictly decreasing.\n")
} else if (firstNumber >= secondNumber && secondNumber <= thirdNumber) {
    console.log("\nUnordered.\n")
} else if (firstNumber <= secondNumber && secondNumber >= thirdNumber) {
    console.log("\nUnordered.\n")
} else {
    console.log("\nInvalid.\n")
}
