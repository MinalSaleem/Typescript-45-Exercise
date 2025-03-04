//Assignment # 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function make_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    
    options.forEach(option =>{
        let [key , value] = option.split(":");
        car [key.trim()] = value.trim();
    });
   
    return car;
};

console.log(make_car("Toyota","Corolla","Color:Black","Year:2020"));
console.log(make_car("Ford","Fiesta","Color:Blue","Year:2022"));