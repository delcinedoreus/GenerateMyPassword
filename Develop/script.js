// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Whats the length of the password?");
  var chooseLetters = confirm ("Would you like to include letters?");
  var chooseNumbers = confirm ("Would you like to include numbers?");
  var chooseSpecial = confirm ("Would you like to include special characters?");
  
  

  var passwordText = document.querySelector("#password");
  var password ="";
  for (var i=0; i<passLength; i++){
    password=password+generateRandomCharacter(chooseLetters,chooseNumbers,chooseSpecial);

  }

  passwordText.value = password;

}
function generateRandomCharacter (chooseLetters,chooseNumbers,chooseSpecial){
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9];
var characters = ["!","@","#","$","%","&","*"];
var list =[];
if(chooseLetters){
  list=list.concat(alphabet);

}
if(chooseNumbers){
  list=list.concat(numbers);

}
if(chooseSpecial){
  list=list.concat(characters);

}

var randomNumber=Math.random();
var randomValue=list.length*randomNumber;
var randomIndex=Math.floor(randomValue);
var randomCharacter=list[randomIndex];
return randomCharacter;


}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
