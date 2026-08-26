//input from terminal

const weight = process.argv[2];
const height = process.argv[3];

function calcBmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

console.log(calcBmi(weight, height));

if(calcBmi(weight, height) < 18.5){
    console.log("Under Weight");
}
else if(calcBmi(weight, height) < 24.9){
    console.log("Healthy Weight");
}
else if(calcBmi(weight, height) < 29.9){
    console.log("Over Weight");
}
else{
    console.log("Obese");
}