
var msec =0;
var sec = 0 ;
var min = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");


function timer(){
    msec++
    msecHeading.innerHTML = msec
    if (msec >= 100){
        msec = 0
        sec++
        secHeading.innerHTML = sec
    }
    else if(sec >= 60){
        sec = 0
        min++
        minHeading.innerHTML = min
    }
}

function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval (interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
}

