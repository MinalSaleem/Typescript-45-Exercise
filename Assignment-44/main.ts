//Assignment # 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function make_sandwich(...ingredients : string[]) {
    console.log(`Ingredients of sandwich: ${ingredients}.`);  
};

make_sandwich("Turkey","Cheese","Lettuce");
make_sandwich("Ham","Swiss");
make_sandwich("Peanut","ButterJelly");