const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a integer: "));

if (Number.isNaN(number) || Number.isSafeInteger(number) != true){
    console.log("\nInvalid.\n")
} else if (number % 2 == 1 || number % 2 == (-1)) {
    console.log("\nOdd.\n")
} else if (number % 2 == 0) {
    console.log("\nEven.\n")
}
