// EXERCISE 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
var alienColor = "green";
if (alienColor === "green") {
    console.log("player earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("player earned 10 points");
}
else if (alienColor === "red") {
    console.log("player earned 15 points");
}
// version 2
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("player got 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("player earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("player earned 15 points");
}
// Version 3
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("player got 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("player earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("player earned 15 points");
}
