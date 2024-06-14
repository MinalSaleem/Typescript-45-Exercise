//Assignment # 18

//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let placeToVisit: string[] = ["turkey","italy","paris","london","new york"];

//Print in original order:
console.log("Original Order:", placeToVisit);

//Print in alphabetical order:
console.log("Alphabetic Order:", placeToVisit.slice().sort());

//Print array is still in its original order:
console.log("Original Order:", placeToVisit);

//Print in reverse alphabetical order:
console.log("Reverse Alphabetical Order:", placeToVisit.slice().sort().reverse());

//Print array is still in its original order:
console.log("Original Order:", placeToVisit);

//Print in reverse order to show that its order has changed:
placeToVisit.reverse();
console.log("Reverse order changed:",placeToVisit);

//Reverse order of your list again to show it’s back to its original order.
placeToVisit.reverse();
console.log("Original Order:", placeToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Alphabetic order:",placeToVisit);

//Sort in reverse alphabetical order to show that its order has changed.
placeToVisit.sort().reverse();
console.log("Reverse alphabetic order :",placeToVisit);