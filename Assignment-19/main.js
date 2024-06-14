//Assignment # 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestsName = ["Farukh", "Saad", "Rohan"];
guestsName.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially inivited to dinner."));
});
