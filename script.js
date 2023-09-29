// Assignment Code
/*

boolean variables for lower and uppercase characters, numbers, and special characters

function for user hitting buttons to start the program

function asking the user how many characters they want
  characters must be between 8-128 and must be a whole number (no decimals)

function asking the user if they want to use lower and uppercase characters, numbers, and special characters

function to generate password
  based off of user feedback make a password using their character count and character choice
  random generator that links to other functions to pull individual numbers and characters for password

function to generate numbers, function to generate lowercase, function to generate uppercase, function to generate special characters

*/

var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var includeNumbers;
var includeSpecialCharacters;

var finalPassword = "";



function getARandomNumber(min,max){
  return Math.floor(Math.random() * (max-min + 1) + min)
}

function generatePassword(){
  numberOfCharacters = prompt("How many characters?")
  includeNumbers = confirm("Do you want numbers?")


  var randomNumber = getARandomNumber()
  finalPassword = finalPassword + randomNumber;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
