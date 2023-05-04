// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables used for trapping and capturing user criteria
var passLength;
var i = 1;
var upperCase = false;
var lowerCase = false;
var numbers = false;
var specChar = false;

//variable Arrays to hold possible password characters
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerArray = [];
upperArray.forEach(word => lowerArray.push(word.toLowerCase()));
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

var passwordArray = [];
var ranPassword ="";
var ranIndex = 0;

//When this function is called it gets the user length and traps the answer until it meets the length requirement
function getLength() {
  passLength = prompt("Please enter a length for your password.", "Length must be between 8 and 128 characters.");

  if (passLength >= 8 && passLength <= 128) {
    i = 2;
  }
  else {
    i--;
    window.alert("Length did not meet requirements!\nPlease enter a password between 8 and 128 characters");
  }
  return;
}

//When this function is called, criteria to use in password generation is taken. At least one criteria must be true.
function getCriteria() {
  upperCase = confirm("Does the password need upper case letters?\nOkay/yes   cancel/no");
  lowerCase = confirm("Does the password need lower case letters?\nOkay/yes   cancel/no");
  numbers = confirm("Does the password need numbers?\nOkay/yes   cancel/no");
  specChar = confirm("Does the password need special characters?\nOkay/yes   cancel/no");

  if (upperCase == false && lowerCase == false && numbers == false && specChar == false) {
    i = 1;
    window.alert("Password must use at least 1 criteria before generating.\nPlease select at least 1 criteria.");
    return;
  }
  else {
    i = 2;
    return;
  }
}

//This function takes user criteria to build a matching array of valid characters
function buildCharacterBank() {
  if (upperCase == true) {
    passwordArray = passwordArray.concat(upperArray);
  }
  if (lowerCase == true) {
    passwordArray = passwordArray.concat(lowerArray);
  }
  if (numbers == true) {
    passwordArray = passwordArray.concat(numArray);
  }
  if (specChar == true) {
    passwordArray = passwordArray.concat(specialArray);
  }
  return;
}

//This function randomly selects an index from our valid character bank and adds it the random password string
function buildPassword() {
  for (var r = 0; r < passLength; r++) {
    ranIndex = Math.floor(Math.random() * passwordArray.length);
    ranPassword += passwordArray[ranIndex];
  }
  return;
}

//This is the main function used to generate the complete password
function generatePassword() {
  //resets valuse for new password every time
  upperCase = false;
  loserCase = false;
  numbers = false;
  specChar = false;
  passwordArray = [];
  ranPassword = "";

  //Getting valid length from user for Password
  do {
    getLength();
  }
  while (i < 2);

  //Get at least one criteria for password from User
  i = 1;
  do {
    getCriteria();
  }
  while (i < 2);
  
  //Build one array to randomly generate a password from
  buildCharacterBank();

  //Generating a random password
  buildPassword();
  return ranPassword;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
