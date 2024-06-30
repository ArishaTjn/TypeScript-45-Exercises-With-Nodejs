// EXERCISE 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var GuestList = ["Arisha", "Imran", "Abdullah", "Rumi", "Afia"];
var dontCome = GuestList[4];
console.log(dontCome, "can't come");
GuestList.splice(4, 4, "Babar Azam");
console.log("Good news ! we have found a bigger table for Dinner");
//Adding a new guest at starting index of  array 
GuestList.unshift("Ali");
// Adding a new guest at the ending index of array
GuestList.push("Zain");
// Get a middle index of array
var middleIndex = Math.floor(GuestList.length / 2);
// Adding a new guest at middle index of  array 
GuestList.splice(middleIndex, 0, "Umer");
console.log("Updated list of our Guests");
GuestList.forEach(function (guestName) { return console.log("Salam ".concat(guestName, " , Would you like to dinner with me?")); });
