function scrambleWord(word) {
    // Creating a variable to hold the original length of the word
    let originalLength = word.length;

    // Creating an empty temporary string to hold the scrambled word

    let scrambledWord = '';

    //looping through the characters of the word
    for (let i=0; i < originalLength; i++) {
        //Generating a random index within characters of the word
        const randomIndex = Math.floor(Math.random() * word.length);

        //Add the randomly selected character to the scrambled word
        scrambledWord += word[randomIndex];

        //Removing the selected character from the original word
        word = word.slice(0, randomIndex) + word.slice(randomIndex + 1);

        //output the current status
        console.log(`original: ${word} | Scrambled: ${scrambledWord} | Remaining: ${originalLength - i - 1}`);

    }

    // Return the final scrambled word
    return scrambledWord;
}

//Example usage:
const originalWord = "example";
const scrambled = scrambleWord(originalWord);
console.log(`Original: ${originalWord} | Scrambled: ${scrambled}`);


//Project 2

function countdownTimer(endDate) {
    const targetDate = new Date(endDate).getTime(); //Converting the end date to milliseconds
    const now = new Date().getTime(); //Getting the current date in milliseconds
    const timeRemaining =  targetDate - now; // Calculate the time remaining in milliseconds

    // calculating days, hours, minutes and seconds
    const days =  Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    //Return the countdown values in an object
    return {
        days, 
        hours,
        minutes,
        seconds,
    };
}

function update() {
    const countdownValues = countdownTimer('2023-09-23T16:52:55');

    let output = 'Time Remaining: ';

    for (const unit in countdownValues) {
        if (countdownValues.hasOwnProperty(unit)) {
            output += `${countdownValues[unit]} ${unit} `;
        }
    }

    console.log(output.trim());

    // update the countdown every second
    setTimeout(update, 1000);
}

//start the countdown
update();
