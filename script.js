document.querySelector(".strengthMeter").style.width = 0;

function textValueChanged() {
    const num = (document.getElementById('password').value.length);
    document.querySelector(".strengthMeter").style.width = (num * 5) + "%";
    strengthMeterBarColor(num*5);
}

function strengthMeterBarColor(num) {
    console.log("num",num);
    if (num < 40) {
        document.querySelector(".strengthMeter").style.background = "red";
        }
    else if (num < 60) {
        document.querySelector(".strengthMeter").style.background = "orange";
        }
    else if (num > 60) {      
        document.querySelector(".strengthMeter").style.background = "green";
     }
}

    