//Assignment # 12

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.

let namesArray : string[] = ["Alisbha","Aleeza","Muniza"];

for (let i = 0; i < namesArray.length; i++) {
    console.log(`Hello ${namesArray[i]}! How are you?`);
};