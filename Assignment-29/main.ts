//Assignment # 29

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits : string[] = ["Cherry","Mango","Apple","Banana"];
if (favorite_fruits.includes("Cherry")){
    console.log("You really like Cherry.");
}
if (favorite_fruits.includes("Mango")){
    console.log("You really like Mango.");
}
if (favorite_fruits.includes("Apple")){
    console.log("You really like Apple.");
}
if (favorite_fruits.includes("Banana")){
    console.log("You really like Banana.");
}
if (favorite_fruits.includes("Pear")){
    console.log("You really like Pear.");
};