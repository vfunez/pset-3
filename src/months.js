const readlineSync = require("readline-sync");

const userMonth = (readlineSync.question("\nEnter a month: "));
month = userMonth.toUpperCase();

if (month == "FEB" || month == "FEBRUARY") {
    console.log("\n28 or 29 days.\n");
} else if (month == "APR" || month == "APRIL" || month == "JUN" || month == "JUNE" || month == "SEP" || month == "SEPTEMBER" || month == "NOV" || month == "NOVEMBER") {
    console.log("\n30 days.\n");
} else if (month == "JAN" || month == "JANUARY" || month == "MAR" || month == "MARCH" || month == "MAY" || month == "JUL" || month == "JULY" || month == "AUG" || month == "AUGUST" || month == "OCT" || month == "OCTOBER" || month == "DEC" || month == "DECEMBER") {
    console.log("\n31 days.\n");
} else {
    console.log("\nInvalid.\n")
}
