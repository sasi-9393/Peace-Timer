let btn1 = document.getElementById("twentySecondsBtn");
let btn2 = document.getElementById("thirtySecondsBtn");
let btn3 = document.getElementById("fortySecondsBtn");
let btn4 = document.getElementById("oneMinuteBtn");

let timerText = document.getElementById("timerText");
let uniqueid1 = null;
let uniqueid2 = null;
let uniqueid3 = null;
let uniqueid4 = null;
btn2.onclick = function() {
    let btn2Value = 30;
    uniqueid2 = setInterval(function() {
        btn2Value = btn2Value - 1;
        if (btn2Value === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(uniqueid2);

        } else {
            timerText.textContent = btn2Value + " seconds left";

        }
    }, 1000)
    clearInterval(uniqueid1);
    clearInterval(uniqueid4);
    clearInterval(uniqueid3);
}
btn3.onclick = function() {
    let btn3Value = 40;
    uniqueid3 = setInterval(function() {
        btn3Value = btn3Value - 1;
        if (btn3Value === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(uniqueid3);

        } else {
            timerText.textContent = btn3Value + " seconds left";

        }
    }, 1000)
    clearInterval(uniqueid2);
    clearInterval(uniqueid4);
    clearInterval(uniqueid1);
}
btn4.onclick = function() {
    let btn4Value = 60;
    uniqueid4 = setInterval(function() {
        btn4Value = btn4Value - 1;
        if (btn4Value === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(uniqueid4);

        } else {
            timerText.textContent = btn4Value + " seconds left";

        }
    }, 1000)
    clearInterval(uniqueid2);
    clearInterval(uniqueid1);
    clearInterval(uniqueid3);
}




btn1.onclick = function() {
    let btn1Value = 20;
    uniqueid1 = setInterval(function() {
        btn1Value = btn1Value - 1;
        if (btn1Value === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(uniqueid1);

        } else {
            timerText.textContent = btn1Value + " seconds left";

        }
    }, 1000)

    clearInterval(uniqueid2);
    clearInterval(uniqueid4);
    clearInterval(uniqueid3);
}