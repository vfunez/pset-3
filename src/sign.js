const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number) || Number.isSafeInteger(number) != true){
    console.log("\nInvalid.\n")
} else if (number < 0) {
    console.log("\nNegative.\n")
} else if (number == 0) {
    console.log("\nZero.\n")
} else if (number > 0) {
    console.log("\nPositive.\n")
}
