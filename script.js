// Assignment Code
var generateBtn = document.querySelector("#generate");

var questions = {
    questionOne: "How many character would you like for your password?",
    questionTwo:"Do you want to include lowercase in your password? Enter y for yes or n for no",
    questionThree:"Do you want to include uppercase in your password? Enter y for yes or n for no",
    questionFour: "Do you want to include numeric in your password? Enter y for yes or n for no",
    questionFive: "Do you want to include special characters in your password? Enter y for yes or n for no"};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Elements
var firstAnswer = prompt(questions.questionOne);
console.log("First Answer ", firstAnswer);
if(firstAnswer > 128){
    alert ("Password Character must be less than 128");
}else if(firstAnswer< 8){
    alert ("Password Character must be 8 or more");
}
if(firstAnswer !== "number"){
    alert ("you must enter numberic value");
}
var secondAnswer = prompt(questions.questionTwo);
console.log("Second Answer", secondAnswer)
var thirdAnswer = prompt(questions.questionThree);
console.log("Third Answer", thirdAnswer)
var fourthAnswer = prompt(questions.questionFour);
console.log("Fourth Answer", fourthAnswer)
var fifthAnswer = prompt(questions.questionFive);
console.log("Fifth Answer", fifthAnswer)
var selectLength = +firstAnswer;
console.log(selectLength);

if(secondAnswer === "y"){
    var selectLow = "abcdefghijklmnopqrstuvwxyz";
    console.log(selectLow);
}else{
    var selectLow = ""
}
if(thirdAnswer === "y"){
    var selectUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(selectUpper);
}else{
    var selectUpper = ""
}
if(fourthAnswer === "y"){
    var selectNumber= "1234567890";
    console.log(selectNumber);
}else{
    var selectNumber = ""
}
if(fifthAnswer === "y"){
    var selectSymbol= "!@#$%^&*()";
    console.log(selectSymbol);
}else{
    var selectSymbol = ""
}

if(secondAnswer === "n" && thirdAnswer === "n" && fourthAnswer === "n" && fifthAnswer === "n"){
    alert("you must choose at lease one set of values");
} 


// Generate PasswordS
function generatePassword(){


    var inputbox = document.getElementById("password")
    var result = "";
    for (var i=0; i<selectLength;i++){
        var chars = selectLow+selectUpper+selectNumber+selectSymbol;
        var random = Math.floor(Math.random()*chars.length);
        console.log("chars ",chars);
        result += chars.charAt(random);
    }
    if(secondAnswer === "n" && thirdAnswer === "n" && fourthAnswer === "n" && fifthAnswer === "n"){
        return "you must choose at lease one set of values, please refresh the page and try it again";
    } else{
    return result
    }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);