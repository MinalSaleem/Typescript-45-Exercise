//Assignment # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality and inequality with strings:
console.log("Equality Test:", "Ahmed" === "Ahmed");
console.log("Inequality Test:", "Ahmed" === "Saad");
// • Tests using the lower case function:
console.log("LowerCase Test:", "Munaf".toLowerCase() === "munaf");
console.log("LowerCase Test:", "Munaf".toLowerCase() === "MUNAF");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
console.log("Equality Test:", 1000 === 1000);
console.log("Inequality Test:", 10 !== 10);
console.log("Greater than Test:", 999 > 99);
console.log("Less than Test:", 666 < 66);
console.log("Greater than and Equal to Test:", 10 >= 100);
console.log("Less than and Equal to  Test:", 5 <= 100);
//Tests using "and" and "or" operators:
console.log("And Operator Test:", (9 > 7) && (7 < 9));
console.log("Or Operator Test:", (4 > 5) || (5 > 7));
//Test whether an item is in a array:
let nums = [1, 3, 5, 7];
console.log("Test Number:", nums.includes(5));
//Test whether an item is not in a array:
let nums1 = [1, 3, 5, 7];
console.log("Test Number:", nums1.includes(4));
export {};
