//Assignment # 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirts(size: string= "large" ,message: string= "I love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
};

make_shirts();   //Default large and message
make_shirts("medium");    //Default message, medium size
make_shirts("small","I love python");    // Custom message, small size