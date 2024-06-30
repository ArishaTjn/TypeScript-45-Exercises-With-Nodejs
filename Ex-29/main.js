"use strict";
// EXERCISE 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas
let favFruit = ["Apple", "Banana", "Mango"];
if (favFruit.includes("Mango")) {
    console.log("I really like mangoes");
}
if (favFruit.includes("Banana")) {
    console.log("I really like Bananas");
}
if (favFruit.includes("Apple")) {
    console.log("I really like Apples");
}
if (favFruit.includes("watermelon")) {
    console.log("I really like watermelon");
}
if (favFruit.includes("Strawberry")) {
    console.log("I really like strawberries");
}
