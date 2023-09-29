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
var uppercase;
var lowercase;
var finalPassword = "";
var arrcontainer = [];
var randomNumber = 0;
var randomPassword = "";


function getARandomNumber(min,max){
  return Math.floor(Math.random() * (max-min + 1) + min)
}

function generatePassword(){
  arrcontainer = [];
  randomPassword = "";
  numberOfCharacters = prompt("How many characters?")
  numberOfCharacters = Math.floor (numberOfCharacters)
  if (isNaN(numberOfCharacters) || numberOfCharacters < 8 || numberOfCharacters > 128 ) {
    alert("Invalid Answer!");
    return;
  }

  uppercase = confirm("Do you want uppercase letters?")
    if (uppercase) {
      arrcontainer.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
   
    }
  lowercase = confirm("Do you want lowercase letters?")
    if (lowercase) {
      arrcontainer.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
    
    }
  includeSpecialCharacters = confirm("Do you want special characters?")
    if (includeSpecialCharacters) {
      // this is ridiculously stressful, get a magnifying glass ready in order to type this one out
      arrcontainer.push("#","$","%","&",",","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~")
    }
  includeNumbers = confirm("Do you want numbers?")
    if (includeNumbers) {
      arrcontainer.push("0","1","2","3","4","5","6","7","8","9")
    }

  if (arrcontainer.length === 0) {
    alert("PLEASE SAY YES TO SOMETHING")
    return;
  }

  getARandomPassword()
  return randomPassword;
}

function getARandomPassword() {
  for ( var i = 0; i < numberOfCharacters; i++) {
    randomNumber = getARandomNumber(0, arrcontainer.length)
  randomPassword = randomPassword + arrcontainer[randomNumber]
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
