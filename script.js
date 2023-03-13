/*GOALS: 
- Present the user with a series of prompts when button is clicked.
- The prompts ask for password criteria, characters, and length.
- Generate password and display on screen either in prompt or in place of the placeholder text. 
*/
//Found and used the character chart already available at https://net-comber.com/charset.html
// Assignment Code
var generateBtn = document.querySelector("#generate"); //Assigns the id for the button (in the index.html file) to generateBtn.
const numbers = [1,2,3,4,5,6,7,8,9]; //Create an array of numbers
const symbols = ["!","@","#","&",]; //Create an array of symbols
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);//Creat an array of the numbers 1-26 + 97 to get an array of 97-122
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));//Create a variable for lowercase letters and assign it all the character values set above based off the character chart
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());//Take the lowercase array we have and make each a capital letter.
let generatedPassword = "";//set the variable we will use to store the new password to an empty string.

function generatePassword (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase)
{
  //Make a new array that has had multiple arrays added to it.
  const availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasUppercase ? uppercaseLetters : []),
    ...(hasLowercase ? lowercaseLetters : []),
  ];

  //If the user, for some reason, selects Cancel for every prompt
  if(availableCharacters.length === 0)
  {
    return "You need to press OK for SOMETHING, Silly. Try again.";
  }

  //Add a random character from the above array until we reach the length the user set.
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    generatedPassword += availableCharacters[randomIndex];
    
  }
  //return the result.
  return generatedPassword;
}


// Write password to the #password input
function writePassword() //Created a function for writing the password onscreen.
{
  var lengthPref = prompt("Enter password length between 8 - 128 characters", "Password length"); 
  var uppercasePref = confirm("Click OK if you would like to include uppercase letters, otherwise click Cancel");
  var lowercasePref = confirm("Click OK if you would like to include lowercase letters, otherwise click Cancel");
  var numberPref = confirm("Click OK if you would like to include numbers, otherwise click Cancel");
  var symbolPref = confirm("Click OK if you would like to include symbols, otherwise click Cancel");

  var password = generatePassword(lengthPref, numberPref, symbolPref, lowercasePref, uppercasePref); // Assigns the output of the generatePassword to the password variable.
  var passwordText = document.querySelector("#password"); //Assigns the id: password (in index.html) to the passwordText variable. 

  passwordText.value = password; //Sets passwordText to equal password.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When the "Generate Password" button is clicked.
