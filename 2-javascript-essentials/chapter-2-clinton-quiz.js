/*
BMI calculator
description: set values for height and weight in pounds, then convert the values
to centimeters and kilos, outputting the results to the console.
*/
let height = 20;
let weight = 40;

let heightInCms = height * 2.54;
let weightInKilos = weight / 2.2046;

console.log(`The height in cms is ${heightInCms}`);
console.log(`Weight in kilos is ${weightInKilos}`);
