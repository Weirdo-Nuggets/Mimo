var answer = "Picasso";
if (answer === "Picasso") {
    console.log("Correct");
}
if (answer !== "Matisse") {
    console.log("Not Quite!");
}

var age = 18;
var userAge = 13;
var ofAge = age - userAge; 
if (age <= 18) {
    console.log("Try again in " + ofAge + " years" );
}

var isDay = true;
if (isDay === true) {
    console.log("Lights On!");
}

//used to grade multiple times
var score = 51;
var pass = score > 50;
if (pass) {
    console.log(pass);
}