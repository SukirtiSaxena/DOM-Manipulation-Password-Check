document.querySelector(".strengthMeter").style.width = 0;

function textValueChanged() {
    const num = document.querySelector(".password").value.length;
    const text = document.querySelector(".feedback");
    document.querySelector(".strengthMeter").style.width = (num * 5) + "px";
    strengthMeterBarColor(num * 5, text);
}

function strengthMeterBarColor(num, text) {
    if (num < 40) {
        document.querySelector(".strengthMeter").style.background = "red";
        text.innerHTML = "Password should be longer";
    }
    else if (num < 60) {
        document.querySelector(".strengthMeter").style.background = "orange";
        text.innerHTML = "Pretty good";
    }
    else if (num > 60) {
        document.querySelector(".strengthMeter").style.background = "green";
        text.innerHTML = "Grrrreat!";
    }
}

