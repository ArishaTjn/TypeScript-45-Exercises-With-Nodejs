// EXERCISE 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// DEFINE VARIABLES:
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["APPLE", "ORANGE", "BANANA"];
// • Tests for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("Is apple is not equal to apple");
console.log(apple != apple);
// • Tests using the lower case function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("is ten is equal to twenty");
console.log(ten == twenty);
console.log("is ten is  not equal to twenty");
console.log(ten != twenty);
console.log("is ten is greater than zero");
console.log(ten > 0);
console.log("is ten less than five");
console.log(ten < 5);
console.log("is ten is greater than or equal to five");
console.log(ten >= 5);
console.log("is ten is less than or equal to five");
console.log(ten <= 5);
// • Tests using "and" and "or" operators
console.log(" twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
console.log(" twenty is  equal to ten and twenty is greater than forty");
console.log(twenty == 10 && twenty > 40);
console.log("twenty is greater than fifty OR twenty is equal to twenty");
console.log(twenty > 50 || twenty == 20);
console.log("twenty is greater than fifty OR twenty is not equal to twenty");
console.log(twenty > 50 || twenty != 20);
// • Test whether an item is in a array
console.log("Is orange include in my fruits array");
console.log(fruits.includes("ORANGE"));
;
// • Test whether an item is not in a array
console.log("Is ORANGE  not include in my fruits array");
console.log(fruits.includes("ORANGE"));
