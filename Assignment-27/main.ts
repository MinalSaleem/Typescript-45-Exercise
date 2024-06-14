//Assignment # 27

// Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor2 = "green";

//First Version:
if (alienColor2 === "green"){
    console.log("The player earned 5 points.");
}else if (alienColor2 === "yellow"){
    console.log("The player earned 10 points.");
}else if (alienColor2 === "red"){
    console.log("The player earned 15 points.");
}else {
    console.log("Unknown color");
};

//Second Version:
alienColor2 = "yellow";
if (alienColor2 === "green"){
    console.log("The player earned 5 points.");
}else if (alienColor2 === "yellow"){
    console.log("The player earned 10 points.");
}else if (alienColor2 === "red"){
    console.log("The player earned 15 points.");
}else {
    console.log("Unknown color");
};

//Third Version:
alienColor2 = "red";
if (alienColor2 === "green"){
    console.log("The player earned 5 points.");
}else if (alienColor2 === "yellow"){
    console.log("The player earned 10 points.");
}else if (alienColor2 === "red"){
    console.log("The player earned 15 points.");
}else {
    console.log("Unknown color");
};