// Assignment Code
var generateBtn = document.querySelector("#generate");


// Setting the var for the array

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","<",">","."];
var numbers = [0,1,2,3,4,5,6,7,8,9];

//Prompt to instruct user on how to use and to begin

window.load = alert("Say hello to the password generator! Let's Begin.")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}


function generatePassword (){
  var passwordButton = [];
  var password = [];

  var totalLength = parseInt(prompt("Please choose a number between 8 through 128"));

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
