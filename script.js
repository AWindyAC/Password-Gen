/*GOALS: 
- Present the user with a series of prompts when button is clicked.
- The prompts ask for password criteria, characters, and length.
- Generate password and display on screen either in prompt or in place of the placeholder text. 
*/

// Assignment Code
var generateBtn = document.querySelector("#generate"); //Assigns the id for the button (in the index.html file) to generateBtn.


// Write password to the #password input
function writePassword() //Created a function for writing the password onscreen.
{
  var password = generatePassword(); // Assigns the output of the generatePassword to the password variable.
  var passwordText = document.querySelector("#password"); //Assigns the id: password (in index.html) to the passwordText variable. 

  passwordText.value = password; //Sets passwordText to equal password.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When the "Generate Password" button is clicked.


/* NOTES: Discovered a simple way to reference the big list of characters using the method below.
- String.fromCharCode(i) is a method to return the value of i.
http://www.net-comber.com/charset.html //Reference sheet for characters already available in js.

- Math.floor will return a number and round it down
- Math.random() * 26 will return a decimal between 0 and 26.

*/

/* -----------------------------------START Generate a password START----------------------------------------------------- */

function generatePassword()
{
  //Initiating the prompts to appear once this method is called.
  //Assigning variables for each prompt to store the info entered by the user.
  var lengthPref = prompt("Enter password length between 8 - 128 characters", "Password length"); 
  var uppercasePref = prompt("Include uppercase letters?", "Yes or No");

  
  var lowercasePref = prompt("Inculde lowercase letters?", "Yes or No");
  var numberPref = prompt("Would you like to include numbers?", "Yes or No");;
  var symbolPref = prompt("Would you like to include symbols and special characters?", "Yes or No");
  

/* ---------------------------------CONFUSING PROBLEM START--------------------------------------------------------*/
/* For some reason the variables below had to be written and assigned here without var. I had been working for days
with the variables declared and assigned above like the others, and suddenly I was getting reference errors, saying
that they were not intialized. If I add var or anything in front of these variables, I get the same error.
Commented out the code for future reference, so I don't think that the mistake made was a typo.  */
//The error message only shows up when the user enters "No". Which should trigger the getNewCharacter() function.
  /*
  uppercasePref = prompt("Include uppercase letters?", "Yes or No");
  lowercasePref = prompt("Inculde lowercase letters?", "Yeas or No");
  numberPref = prompt("Would you like to include numbers?", "Yes or No");
  symbolPref = prompt("Would you like to include symbols and special characters?", "Yes or No");
  */
/*----------------------------------------PROBLEM END-------------------------------------------------------*/
  

  //After taking info from user
  var passwordResult = ""; //create an empty string to add too later.
  //Now that we know what preferences the user has. Let's store them all in an arry.
  //const typesCount = lower + upper + number + symbol;
 //console.log(typesCount);
  //NOTE: Learned to filter things in an array using the filter() method
  /*Now let's filter any of the elements in the array that are false, in other words,
  what the user doesn't want to include. And assign it to a variable. */
  //const typesArray = [lower, upper, number, symbol].filter(item => item === true);
  //console.log("typesArray: " + typesArray)

  var characterArray = [getrandomLower(), getrandomUpper(), getrandomNumber(), getrandomSymbol()];
  
  //Trying to find a way to filter out what the user enters "No" for.
  /*if the user chooses no, I want the code to go through passwordResult and check each letter for
  any of the characters the user doesn't want and replace them with another*/
  function checkPrefs(passwordCompare)
  {
    if(uppercasePref === "No" || uppercasePref === "no") //Did the user select "No"
    {
      for (let i = 0; i < 26; i++) //Iterating through the entire capital letters on the chart (in the link on line 28)
      {
        var comparison = String.fromCharCode(i + 65); //Get each of the 26 capital letters using i + 65 in the for loop.
        if(passwordCompare.includes(comparison)) //Is the character assigned to comparison in passwordCompare
        {
            //if so then replace the first instance of the character assigned to comparison by calling the getNewCharacter function.
            passwordCompare.replace(passwordCompare.indexOf(comparison), getNewCharacter());
        }
      }
    }
    if(lowercasePref === "No" || lowercasePref === "no") //Did the user select "No"
    {
      for (let i = 0; i < 26; i++) //Iterating through the entire capital letters on the chart (in the link on line 28)
      {
        var comparison = String.fromCharCode(i + 65); //Get each of the 26 capital letters using i + 65 in the for loop.
        if(passwordCompare.includes(comparison)) //Is the character assigned to comparison in passwordCompare
        {
            //if so then replace the first instance of the character assigned to comparison by calling the getNewCharacter function.
            passwordCompare.replace(passwordCompare.indexOf(comparison), getNewCharacter());
        }
      }
    }
    if(numberPref === "No" || numberPref === "no") //Did the user select "No"
    {
      for (let i = 0; i < 26; i++) //Iterating through the entire capital letters on the chart (in the link on line 28)
      {
        var comparison = String.fromCharCode(i + 65); //Get each of the 26 capital letters using i + 65 in the for loop.
        if(passwordCompare.includes(comparison)) //Is the character assigned to comparison in passwordCompare
        {
            //if so then replace the first instance of the character assigned to comparison by calling the getNewCharacter function.
            passwordCompare.replace(passwordCompare.indexOf(comparison), getNewCharacter());
        }
      }
    }
    if(symbolPref === "No" || symbolPref === "no") //Did the user select "No"
    {
      for (let i = 0; i < 26; i++) //Iterating through the entire capital letters on the chart (in the link on line 28)
      {
        var comparison = String.fromCharCode(i + 65); //Get each of the 26 capital letters using i + 65 in the for loop.
        if(passwordCompare.includes(comparison)) //Is the character assigned to comparison in passwordCompare
        {
            //if so then replace the first instance of the character assigned to comparison by calling the getNewCharacter function.
            passwordCompare.replace(passwordCompare.indexOf(comparison), getNewCharacter());
        }
      }
    }
  }

  /*-----------------Generating the password with "yes" selected for all preferences.-------------------*/
  
  for (var i = 0; i < lengthPref; i++) 
  {
    var randomCharacter = Math.floor(Math.random() * characterArray.length);
    var chosenCharacter = characterArray[randomCharacter];
    passwordResult += chosenCharacter;

    checkPrefs(passwordResult); //Check to see if the current password meets the criteria set by the user.
  }
    return passwordResult; //.slice(0, lengthPref);
}

/* --------------------------------------END Generate a password END-------------------------------------------------------- */



/* -----------------------------START Functions using fromCharCode() START------------------------- */
/* We want to create functions for getting a random character from each of the possible sets */
/* -----------------------------Lowercase, Uppercase, Numbers, and Symbols----------------*/


  function getrandomLower() //get random lowercase letter
  {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //
  }

  function getrandomUpper() //get random uppercase letter
  {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getrandomNumber() //get random number
  {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getrandomSymbol() //get a random symbol
  {
    var symbols = "!@#$%^&*()";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

/* -----------------------------END Functions using fromCharCode() END------------------------- */



/* ------------------------START Function for choosing a new character START---------------------------------------- */
/* We will create an array of four numbers. Then randomly pick one of those numbers.
Whichever number is picked will determine which getRandom function we will run. */

function getNewCharacter() //Checks each stored preference from the user to find 
{
  var chooseArray = []; //Our empty array. We will add a number for each preference the user said "Yes" to.
  if(uppercasePref === "Yes" || uppercasePref === "yes")
  {
    chooseArray.push(1); //chooseArray will have a 1 added to the end of the array.
  }

  //Did the user want lowercase characters
  if(lowercasePref === "Yes" || lowercasePref === "yes")
  {
    chooseArray.push(2); //chooseArray will have a 2 added to the end of the array.
  }

  //Did the user want numbers
  if(numberPref === "Yes" || numberPref === "yes")
  {
    chooseArray.push(3); //chooseArray will have a 3 added to the end of the array.
  }

  //Did the user want symbols
  if(symbolPref === "Yes" || symbolPref === "yes")
  {
    chooseArray.push(4); //chooseArray will have a 4 added to the end of the array.
  } 

  chosenfunction = chooseArray[Math.floor(Math.random() * 3)]; //Choose a random number from chooseArray and assign it.

  //Depending on what single number was pulled from the array we will run a function.
  if(chosenfunction === 1)
  {
    getrandomUpper(); //If 1 is chosen then we will get a random uppercase letter
  }
  if(chosenfunction === 2)
  {
    getrandomLower(); //If 2 is chosen then we will get a random lowercase letter
  }
  if(chosenfunction === 3)
  {
    getrandomNumber(); //If 3 is chosen then we will get a random number
  }
  if(chosenfunction === 4)
  {
    getrandomSymbol(); //If 4 is chosen then we will get a random symbol
  }

}
/* ------------------------END Function for choosing a new character END---------------------------------------- */
