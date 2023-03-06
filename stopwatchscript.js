let seconds = 0;
let minutes = 0;
let hours = 0;
let milliseconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displayMilliseconds = 0;

let interval = null;

let status = "stopped";

function stopWatch(){

    milliseconds++;

    if (milliseconds === 100){
        milliseconds = 0;
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;

            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }

    if(milliseconds < 10){
        displayMilliseconds = "0" + milliseconds.toString();
    }
    else if(milliseconds < 100){
        displayMilliseconds = milliseconds.toString();
    }
    else{
        displayMilliseconds = milliseconds.toString();
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds.toString();
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes.toString();
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours.toString();
    }    

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;
}


function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start"
        status = "stopped";

    }
}

function reset(){

    window.clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    milliseconds = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}
