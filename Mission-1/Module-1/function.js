//functions are reusable code blocks for a particular task

function total(price, quantity){
    const grandTotal = price * quantity;
    return grandTotal;
}
const spent = total(10,12);
console.log(spent);


function sayHallo(name){
    console.log(`Hello ${name}`);
}
sayHallo("Sufi")