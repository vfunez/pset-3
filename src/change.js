const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER_VALUE = 25;
const DIME_VALUE = 10;
const NICKEL_VALUE = 5;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.")
} else {
  let pennies = Math.round(amount * 100);

  let quarters = Math.floor(pennies / QUARTER_VALUE);
  pennies = pennies % QUARTER_VALUE;

  let dimes = Math.floor(pennies / DIME_VALUE);
  pennies = pennies % DIME_VALUE;

  let nickels = Math.floor(pennies / NICKEL_VALUE);
  pennies = pennies % NICKEL_VALUE;

  console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + pennies + " pennies.");
}
