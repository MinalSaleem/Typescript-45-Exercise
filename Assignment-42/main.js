//Assignment # 42
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magiciansName = ["Harry", "David", "John"];
function show(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        (magicians[i]) = "The great " + magicians[i];
    }
    ;
}
;
make_great(magiciansName); // Modifies the original array
show(magiciansName); // Shows modified names
