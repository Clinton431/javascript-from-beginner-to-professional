// Create a recursive function that counts up to 10. Invoke the function with different
// start numbers as the arguments that are passed into the function. The function
// should run until the value is greater than 10.

function countToTen(startNumber) {
    // If the number is greater than 10, stop the recursion
    if (startNumber > 10) {
        return;
    }

    //Print the current number
    console.log(startNumber);

    //Recursive call with the next number
    countToTen(startNumber + 1);
}

// Invoking the number in different start numbers
countToTen(1); // Start counting from 1
countToTen(5); // start counting from 5
countToTen(8); // start counting from 8


// Use the arrow format to create functions that output the values one and two to the
// console. Create a third function that outputs the value three to the console, and then
// invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also use
// setTimeout() to invoke the first function immediately and then the third function.


// Arrow function to output "one" to the console

const printOne = () => {
    console.log("one");
};

//Arrow function to output two to the console
const printTwo = () => {
    console.log("TWo");
};

// Arrow function to output three to the console and invoke printOne and PrintTwo
const printThree = () => {
    console.log("three");
    printOne();
    printTwo();
};

// arrow function to output "four" to the console
const printFour = () => {
    console.log("four");
};

// Use setTimeOut to invoke printOne immediately and printThree after a delay
setTimeout(() => {
    printOne();
}, 0);

setTimeout(() => {
    printThree();
}, 2000); // Delayed 2000 milliseconds (2 seconds)

// Invoke PrintFour
printFour();
