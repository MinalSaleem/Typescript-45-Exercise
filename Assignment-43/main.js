"use strict";
//Assignment # 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician_Names = ["Harry", "David", "John"];
function shows_Magician(magicians, magician_copy) {
    magicians.forEach(magician => {
        console.log(magician);
    });
    magician_copy.forEach(magician => {
        console.log(magician);
    });
}
;
function makeGreat(magicians) {
    let magician_copy = [];
    for (let i = 0; i < magicians.length; i++) {
        magician_copy.push("The great " + magicians[i]);
    }
    ;
    return magician_copy;
}
;
let magician_copy = makeGreat(magician_Names);
shows_Magician(magician_Names, magician_copy);
