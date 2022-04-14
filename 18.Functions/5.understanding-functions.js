function display(word) {
    console.log(word);
}
display("Hi");
display("Bye");

function sumTotal(price, tax) {
    console.log(price + tax);
}

sumTotal(1000, 250);

function getName(fullName) {
    return fullName[0]
}
var fullName = ["Don", "Juan"];
var firstName = getName(fullName);

console.log(firstName);

function isFreezing(temperature) {
    return temperature < 0;
}
var freezing = isFreezing(-3);
console.log(freezing);

function calculateSum(a, b) {
    return a + b;
}

function calculateDifference(a, b) {
    return a - b;
}

var sum = calculateSum(3, 5);
var difference = calculateDifference(3, 5);

console.log(sum);
console.log(difference);


function displayTitle(title) {
    console.log("Title: " + title);
}
function displayAuthor(author) {
    console.log("Author: " + author);
}
function displayYear(year) {
    console.log("Published On: " + year);
}

displayAuthor("John Steinbeck");
displayTitle("Tortilla Flat");
displayYear("1934");

function isRentingAge(age) {
    console.log(age >= 25);
}
isRentingAge(100);

function isBuyingBudget(budget) {
    return budget >= 10000;
}
var canBuy = isBuyingBudget(50000);
console.log(canBuy);


function displayNames(names) {
    console.log(names[1]);
}

var students = ["Laurel", "Yanni"];
displayNames(students);

function displayNames2(names2) {
    return names2[0];
}

var students2 = ["Laura", "Yimmy"];
var firstName2 = displayNames2(students2);
console.log(firstName2);

function getListOfNames(names3) {
    return names3[0] + ", " + names3[1];
}
var students3 = ["Vera", "Rubin"];
var list = getListOfNames(students3);
console.log(list);