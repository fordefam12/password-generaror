// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*_-+=";
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var password = "";
var inputs = [""];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
// generates a password
function generatePassword() {
  // request total length
  var passwordLength = prompt("💡enter the desired amount of characters💡");
  

  // gives alert if length in not between 8 and 128
  if (password === false) {
    alert("must input!!");
  } else if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength)
  ) {
    userChoices = alert(
      "Invalid entry - Please enter a number between 8 and 128"
    );

    return;
    // gives prompts to add criteria for password
  } else {
    confirmUpper = confirm("💡do you want to use Upper case letters ?");
    
    confirmSpecial = confirm("💡do you want special characters ?");
   
    confirmNumber = confirm("💡do you want numbers ?");
    
    confirmLower = confirm("💡do you want to use lower case letters ?");
    

    // if no choice is made an alert is given
    if (
      confirmLower === false &&
      confirmUpper === false &&
      confirmNumber === false &&
      confirmSpecial === false
    ) {
      userChoices = alert("💡must make a seelection!!💡");
    }
    // different veriations of choices
    else if (
      confirmLower === true &&
      confirmUpper === true &&
      confirmNumber === true &&
      confirmSpecial === true
    ) {
      userChoices = lower.concat(upper, number, special);
      console.log(userChoices);
    }
      userChoices = lower.concat(upper, number, special);
      console.log(userChoices);
    } { if (confirmLower && confirmSpecial && confirmNumber) {
      userChoices = lower.concat(special, number);
      console.log(userChoices);
    } else if (confirmUpper && confirmLower && confirmSpecial) {
      userChoices = lower.concat(upper, lower, special);
      console.log(userChoices);
    } else if (confirmLower && confirmUpper && confirmNumber) {
      userChoices = lower.concat(upper, number);
      console.log(userChoices);
    } else if (confirmUpper && confirmSpecial && confirmNumber) {
      userChoices = upper.concat(special, number);
      console.log(userChoices);
    } else if (confirmUpper && confirmSpecial) {
      userChoices = upper.concat(special);
      console.log(userChoices);
    } else if (confirmLower && confirmSpecial) {
      userChoices = lower.concat(special);
      console.log(userChoices);
    } else if (confirmUpper && confirmLower) {
      userChoices = upper.concat(lower);
      console.log(userChoices);
    } else if (confirmNumber && confirmSpecial) {
      userChoices = number.concat(special);
      console.log(userChoices);
    } else if (confirmNumber && confirmLower) {
      userChoices = number.concat(lower);
      console.log(userChoices);
    } else if (confirmNumber && confirmUpper) {
      userChoices = number.concat(upper);
      console.log(userChoices);
    } else if (confirmNumber) {
      userChoices = number;
      console.log(userChoices);
    } else if (confirmSpecial) {
      userChoices = special;
      console.log(userChoices);
    } else if (confirmLower) {
      userChoices = lower;
      console.log(userChoices);
    }
    var blank = [];

    // Loop for random selection
    for (var i = 0; i < passwordLength; i++) {
      var allChoices =
        userChoices[Math.floor(Math.random() * userChoices.length)];
      blank.push(allChoices);
      console.log(allChoices);
    }
    var password = blank.join("");
    console.log(password);
  }
  //displays passowrd in alert
  confirmpass = alert(password);

  //displays password on page
  return password;
}
