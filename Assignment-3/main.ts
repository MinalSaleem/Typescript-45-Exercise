//Assignment # 3

//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

//UpperCase
let personName1 : string = "rohan khan";
console.log("UpperCase:", personName1.toUpperCase());

//LowerCase
let personName2 : string = "ROHAN KHAN";
console.log("LowerCase:", personName2.toLowerCase());

//TitleCase
let personName3 : string = "roHan kHan";
let words : string[] = personName3.split(" ");
let titlecase : string = "";
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() 
    + words[i].slice(1).toLowerCase() +" "
}
console.log("TitleCase:", titlecase);