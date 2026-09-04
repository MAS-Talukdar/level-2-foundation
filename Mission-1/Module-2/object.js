let user = {
    name:"Sufian",
    age:22,
    address: "Dhaka"
}

//name is the kye, : is the assignment operator, Sufian is the value

/*
console.log(user);
console.log(user.name);
console.log(user["name"]); // [] is need to dynamic example. [`${}`]
*/

delete user.address // deletion of a key
user.address = "Mymensingh" // addition
user.address = {
    city: "Mymensingh",
    area: "Charpara"
} //Updating

// console.log(user);


console.log(Object.entries(user)); //Provide like an array