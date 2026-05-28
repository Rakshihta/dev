const add = require('./add');

if(add(2,3) === 5){
    console.log(" test successfull");
    exit(0);
}
else{
    console.log("test failed");
    exit(1);
}

