function calcBmi(){
    const weight = Number(document.getElementById("w").value)
    const height = Number(document.getElementById("h").value)
    const bmi = weight/ (height*height)

    if (bmi < 18.5){
        document.getElementById("txt").innerText =`Your BMI is = ${bmi}`;
        document.getElementById("com").innerText ="You are : Under Weight";
    }
    else if (bmi < 24.9){
        document.getElementById("txt").innerText =`Your BMI is = ${bmi}`;
        document.getElementById("com").innerText ="You are : Healthy Weight";
    }
    else if (bmi < 29.9){
        document.getElementById("txt").innerText =`Your BMI is = ${bmi}`;
        document.getElementById("com").innerText ="You are : Over Weight";
    }
    else{
        document.getElementById("txt").innerText =`Your BMI is = ${bmi}`
        document.getElementById("com").innerText ="You are : Obese";
    }
}