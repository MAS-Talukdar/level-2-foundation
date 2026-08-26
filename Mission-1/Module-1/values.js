// falsy value:  false, 0 , "", null, undefined, NaN

// let age = 29;
// let age = "29";
// let age = "";
// let age = 0;
// let age = "0";
let age = false;

if(age){
    console.log("Age Exist");
}
else{
    console.log("Kichu nei");
}

console.log(10 * "Hello"); // example of NaN
console.log(typeof(NaN));
console.log(typeof(null));