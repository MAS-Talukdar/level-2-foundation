function grade(){
    let mark = Number(document.getElementById("marks").value)

    if (mark >= 80){
        document.getElementById("result").innerText = "Your Grade is A+";
    }
    else if (mark >= 70){
        document.getElementById("result").innerText = "Your Grade is A";
    }
    else if (mark >= 60){
        document.getElementById("result").innerText = "Your Grade is A-";
    }
    else if (mark >= 50){
        document.getElementById("result").innerText = "Your Grade is B";
    }
    else{
        document.getElementById("result").innerText = "You are Fail"
    }
}