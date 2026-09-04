// Array method : push, pop, unshift, shift, splice

let name = ["Sufian", "Joy", "Tablik", "Abir", "Fahad"];
let number = [140, 130, 110, 100, 120];

/*
name.push("Rakib"); // Rakib add as a last element on the name array
name.push("Faysal"); // Faysal add as a last element on the name array

name.pop(); //Last element ta delete, Faysal is the last element
*/

/*
name.unshift("Kabir"); // Kabir add as a first element ont the name array
name.shift(); //First element ta delete, Kabir was the first element
*/

/*
//splice(startindex)
name.splice(1, 0, "Hadi"); // 1 mane kon index hisebe add korte cai, 0 mane 1 index er por koita element delete kora hibe na, Hadi add as a 1 index.
*/

name.slice(1,3);
console.log(name);