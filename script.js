const prompt = require("prompt-sync")();

console.log("Welcome to the guessing number game!");

let guesses = 0;

while (true) {
  guesses++;
  const input = prompt("Enter a number to guess (1-10) or type quit: ");

  if (input.toLowerCase() === "quit" || input === "") {
    console.log("See Ya!");
    break;
  }

  const number = parseInt(input);
  if (isNaN(number) || number < 1 || number > 10) {
    console.log("Please enter a valid number between 1 and 10.");
    continue;
  }

  const target = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

  if (number === target) {
    console.log("Congratulations! You guessed the correct number.");
  } else if (number > target) {
    console.log("Your guess is too high. The correct number is", target);
  } else {
    console.log("Your guess is too low. The correct number is", target);
  }
}

console.log("You tried", (guesses-1) ,"times!!");
