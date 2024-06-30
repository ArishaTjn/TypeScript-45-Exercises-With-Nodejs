var GuestList = ["arisha", "Imran", "Abdullah", "Rumi", "Afia"];
var dontCome = GuestList[4];
console.log(dontCome, "can't come");
GuestList.splice(4, 4, "Babar Azam");
GuestList.forEach(function (guestName) { return console.log("Salam ".concat(guestName, " , Would you like to dinner with me?")); });
