// Assignment Code
var generateBtn = document.querySelector("#generate");



// ***********
// DATA
// ***********


var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var speacChar = "$#@!~^&*()_+[]{}-|";
var numString = "0123456789";


var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialArr = "$#@!~^&*()_+[]{}-|".split("");
var numberArr = "0123456789".split("");


var confirmNumbers = false;
var confirmUpper = false;
var confirmLower = false;
var confirmSpecial = false;
var lenPwdChosen = 0;

var minLen = 8;
var _password = "";

// log to see the data
console.log(lowerCaseArr);
console.log(upperCaseArr);
console.log(specialArr);
console.log(numberArr);

// **************************
// USER INPUT - function ()?
// **************************

lenPwdChosen = prompt("Enter the length of your password");
while (lenPwdChosen < minLen) {
  alert("Length of password has to be at least 8");
  lenPwdChosen = prompt("Enter the length of your password");
} 

confirmNumbers = confirm("Do you want numbers in your password?");
confirmUpper = confirm("Do you want uppercase letters?");
confirmLower = confirm("Do you want lowercase letters?");
confirmSpecial = confirm("Do you want special characters?");

// ***********
// MAIN LOGIC
// ***********


if (confirmNumbers) {
  var index = Math.floor(Math.random() * numberArr.length);
  _password += numberArr[index];
}
console.log(_password);

if (confirmUpper) {
  var index = Math.floor(Math.random() * upperCaseArr.length);
  _password += upperCaseArr[index];
}
console.log(_password);

if (confirmLower) {
  var index = Math.floor(Math.random() * lowerCaseArr.length);
  _password += lowerCaseArr[index];
}
console.log(_password);

if (confirmSpecial) {
  var index = Math.floor(Math.random() * specialArr.length);
  _password += specialArr[index];
}
console.log(_password);

// Function: 
function generatePassword() {
  var remaining = lenPwdChosen - _password.length;
  var allChosenStr = "";

  
  if (confirmNumbers) {
    allChosenStr += numString;
  }
  if (confirmUpper) {
    allChosenStr += upperCase;
  }
  if (confirmLower) {
    allChosenStr += lowerCase;
  }
  if (confirmSpecial) {
    allChosenStr += speacChar;
  }
  console.log(allChosenStr);

  for (var i = 0; i < remaining; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    _password += allChosenStr[index];
  }
  console.log('Password before randomized order', _password);

  
  var pwdArr = _password.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  _password = randomOrdered.join("");


  console.log("Final password", _password);
  return _password;
}


function writePassword() {



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


