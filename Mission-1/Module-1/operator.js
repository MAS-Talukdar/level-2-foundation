/**
 * Arithmetic operator  + , - , * , / , %
 * Assignment operator  = , += , -= , *= , /=
 * Comparison operator  == , === , > , < , >= , <=
 * Logical operator     && || !
 */

const a = 10;
const b = 3;
const sum = a+b;
console.log(sum);

const divide = a/b;
console.log(divide);
console.log(divide.toFixed(2)); // doshomiker por 2 ghor porjonto dekhabe and aitar type changed.

const rmndr = a%b;
console.log(rmndr);// sudu vagsesh dekabe

// a + b - (c+f) * d / e
// Braket gets first priority and then left to right

// sum = sum + 10; sum += 10;


// const c = a<b;
// console.log(c);


// Logical if else er satew use kora jay
const c = !(a<b); //ulta result
console.log(c);