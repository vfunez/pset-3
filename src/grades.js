const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const lowestA = 90;
const highestA = 100;
const lowestB = 80;
const highestB = 89;
const lowestC = 70;
const highestC = 79;
const lowestD = 60;
const highestD = 69;
const lowestF = 0;
const highestF = 59;

if (grade >= lowestA && grade <= highestA){
    console.log("\nYou recieved an A.\n")
} else if (grade >= lowestB && grade <= highestB) {
    console.log("\nYou recieved a B.\n")
} else if (grade >= lowestC && grade <= highestC) {
    console.log("\nYou recieved a C.\n")
} else if (grade >= lowestD && grade <= highestD) {
    console.log("\nYou recieved a D.\n")
} else if (grade >= lowestF && grade <= highestF) {
    console.log("\nYou recieved an F.\n")
} else {
    console.log("\nInvalid.\n")
}
