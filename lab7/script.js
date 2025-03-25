"use strict";

const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const para = document.getElementById("para");
let time = 0;
let timerID = null;
para.textContent = time;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer(){
    if(timerID !== null) clearInterval(timerID);
    timerID = setInterval( () => {
        para.textContent = ++time;
    }, 1000);
}

function stopTimer(){
    clearInterval(timerID);
}