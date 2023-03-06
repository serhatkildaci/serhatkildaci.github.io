const hours = 0;
const minutes = 0;
let seconds = 0;
let milliseconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displayMilliseconds = 0;

let interval = null;

let status = "stopped";

function stopWatch() {
  milliseconds++;

  if (milliseconds / 1000 === 1) {
    milliseconds = 0;
    seconds++;

    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;

      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
  }

  displayMilliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  displayHours = hours < 10 ? "0" + hours : hours;

  document.getElementById("display").innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;
}

function startStop() {
  if (status === "stopped") {
    // Start the stopwatch by calling the setInterval() function
    interval = window.setInterval(stopWatch, 1);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliseconds = 0;
  document.getElementById("display").innerHTML = "00:00:00.000";
  document.getElementById("startStop").innerHTML = "Start";
}
