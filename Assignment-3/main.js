//Assignment # 3
//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
//UpperCase
var personName1 = "rohan khan";
console.log("UpperCase:", personName1.toUpperCase());
//LowerCase
var personName2 = "ROHAN KHAN";
console.log("LowerCase:", personName2.toLowerCase());
//TitleCase
var personName3 = "roHan kHan";
var words = personName3.split(" ");
var titlecase = "";
for (var i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase()
        + words[i].slice(1).toLowerCase() + " ";
}
console.log("TitleCase:", titlecase);
