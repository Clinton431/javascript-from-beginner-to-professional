//set the dynamic number values
const dynamicNumber = 50;

// Ask the user to enter a number
const userNumber = parseFloat(prompt("Enter a number:"));

//check and compare the user's number with the dynamic number
if (userNumber > dynamicNumber) {
    console.log(`${userNumber} is greater than ${dynamicNumber}.`);
} else if(userNumber < dynamicNumber) {
    console.log(`${userNumber} is less than ${dynamicNumber}.`);
} else {
    console.log(`${userNumber} is equal to ${dynamicNumber}.`)
}


// exercise 2


// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console
// Array of known friend names 
const knownFriends = ["Alice", "Bob", "Charlie", "David"];

// Ask the user to enter a name
const userName = prompt("Enter a name:");

// Convert user's input to title case (first letter to uppercase, rest lowercase)
const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1).toLocaleLowerCase();

// check if the formatted user name is a known friend

switch (formattedUserName) {
    case "Alice":
    case "Bob":
    case "Charlie":
    case "David":
        console.log(`${formattedUserName} is a known friend.`);
        break;
    default:
        console.log(`Sorry, I don't know ${formattedUserName}.`);
        break;
}

// exercise three rock, paper, scissors.
const choices  = ["Rock", "Paper", "Scissors"];

//Generating random index for the players
const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);

// get player and computer choices 
const playerChoice = choices[playerIndex];
const computerChoice = choices[computerIndex];

// initializing a response message;
let resultMessage = `Player chose ${playerChoice}. Computer chose ${computerChoice}. `;

//Determining the winner
if (playerChoice === computerChoice) {
    resultMessage += "It's a tie";
} else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
) {
    resultMessage += "Player wins!";
} else {
    resultMessage += "Computer wins!";
}

console.log(resultMessage);