const readlineSync = require("readline-sync");

let integer = readlineSync.question("\nEnter a number: ");

if (firstCondition) {
    console.log("\nPositive.")
} else if (secondCondition) {
    console.log("\nNegative.")
} else if (thirdCondition) {
    console.log("\nZero.")
} else {
    console.log("\nInvalid.")
}
