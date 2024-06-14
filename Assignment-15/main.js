//Assignment # 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
//Make list:
var guestList = ["Ahmed", "Ali", "Sarfarz"];
//Print name who who can not make dinner:
var unavailableGuest = guestList.splice(1, 1)[0];
console.log("Mr.".concat(unavailableGuest, ", not invited for dinner."));
//push
guestList.push("Saad");
//print a message:
guestList.forEach(function (guest) {
    return console.log("Mr. ".concat(guest, ", you are cordially invited."));
});
