const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER_VALUE = 0.25;
const DIME_VALUE = 0.10;
const NICKEL_VALUE = 0.05;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.")
} else {
    while (amount / QUARTER_VALUE >= 1) {
      quarterAmount = amount / QUARTER_VALUE
      quarterActualAmount = Mth.floor(quarterAmount)


    }
    while (amount / DIME_VALUE >= 1) {
      dimes = amount / DIME_VALUE
    }
    while (amount / NICKEL_VALUE >= 1) {
      nickels = amount / NICKEL_VALUE
    }
    console.log(quarterActualAmount + "quarters" + dimes + "dimes" + nickels + "nickels");
}
