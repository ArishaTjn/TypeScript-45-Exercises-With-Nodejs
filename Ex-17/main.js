// EXERCISE 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
while (GuestList.length > 2) {
    var removedGuest = GuestList.pop();
    console.log("sorry , ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitation to the last two 2 guests");
GuestList.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited to the dinner")); });
GuestList.pop();
GuestList.pop();
console.log("Empty list", GuestList);
