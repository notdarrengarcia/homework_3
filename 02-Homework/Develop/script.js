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

  if (!totalLength) {
    alert("Please input a number.");
    return;
  }
  else if ( totalLength < 8 || totalLength > 128) {
    alert("Please choose a number between the given perameters.");
    return;
  }
  else{
    alert("Your password will be" + totalLength + "characters long.");
  }


  // this will make the password actually random and give the user a unique value

  for (var i = 0; i < totalLength; i++){
    var random = Math.floor(Math.random() * passwordHolder.length);
    password = password + passwordButton[random];
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // Alerts to confirm the rest of the variables the user might want

  var filterLower = confirm("Would you like to have lowercase letters in your password?");

  var filterUpper = confirm("Do you want to add uppercase letters into your password?");

  var filterNumbers = confirm("Do you wnat top add numbers?");

  var filterSymbols = confirm("Do you wan to add symbols?");


  // loops to make a password based on what the user input

  if (filterSymbols === true){
    for (var i = 0; i < symbols.length; i++){
      passwordButton.push(symbols[i]);
    }
  }

  if (filterNumbers === true){
    for (var i = 0; i < numbers.length; i++){
      passwordButton.push(numbers[i]);
    }
  }

  if (filterUpper === true){
    for (var i = 0; i < upperCase.length; i++){
      passwordButton.push(upperCase[i]);
    }
  }

  if (filterLower === true){
    for (var i = 0; i < lowerCase.length; i++){
      passwordButton.push(lowerCase[i]);
    }
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
