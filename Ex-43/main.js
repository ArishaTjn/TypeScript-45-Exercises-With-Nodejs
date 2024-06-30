// EXERCISE 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Harry potter", "Rowan", "Hermoine"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
show_magicians(great_magicians);
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("Original Array\n");
show_magicians(magicians_names);
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
