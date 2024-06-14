//Assignment # 16
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list..
var guests = ["Ahmed", "Sarfarz", "Saad"];
console.log("Great news! we found a bigger table.");
//unshift for adding new guest start of array.
guests.unshift("Raza");
//splice for adding new guest middle of array.
guests.splice(Math.floor(guests.length / 2), 0, "Rohan");
//push for adding new guest end of array.
guests.push("Abdullah");
guests.forEach(function (guest) {
    return console.log("Dear ".concat(guest, ", you are cordially invited for dinner."));
});
