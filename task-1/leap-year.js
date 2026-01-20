import promptSync from 'prompt-sync';

const prompt = promptSync();
//step 1: ask the user for a year
const input = prompt("Enter a year: ");
//step 2: convert the input to a number
const year = parseInt(input);
//step 3: check if the year is a leap year
if (year < 1 || year > 9999 || isNaN(year)) {
    console.log("Invalid input!");
} else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`yes, ${year} is a leap year.`);
} else {
    console.log(`no, ${year} is not a leap year.`);
}

