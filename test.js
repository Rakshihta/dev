const add = require('./add');

if(add(2,3) === 5){
    console.log(" test successfull");
    process.exit(0);
}
else{
    console.log("test failed");
    process.exit(1);
}

