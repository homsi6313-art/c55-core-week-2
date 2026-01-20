import promptSync from 'prompt-sync';

const prompt = promptSync();
//step 1: ask the user for a year
const inpuut = prompt("Enter a year: ");
//step 2: convert the input to a number
const year = parseInt(inpuut);
//step 3: check if the year is a leap year
if (year < 1 || year > 9999 || isNaN(year)) {
    console.log("Invalid year!");
} else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`yes,${year} is a leap year.`);
} else {
    console.log(`no,${year} is not a leap year.`);
}
//test changes