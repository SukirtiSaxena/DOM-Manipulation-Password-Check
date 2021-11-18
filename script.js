document.querySelector(".strengthMeter").style.width = 0;

function textValueChanged() {
    const num = document.querySelector(".password").value.length;
    document.querySelector(".strengthMeter").style.width = (num * 5) + "px";
    strengthMeterColor(num, document.querySelector(".feedback"));
}

function strengthMeterColor(num, text) {
    document.querySelector(".strengthMeter").style.background = (num < 8) ? "red" : (num < 12) ? "orange" : "green";
    text.innerHTML = (num < 8) ? "Password should be longer" : (num < 12) ? "Pretty good" : "Grrrreat!";
}