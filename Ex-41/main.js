// EXERCISE 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magician_Names = ["David", "Harry Potter", "Rowan", "Hermoine"];
show_magicians(magician_Names);
