var display = document.getElementById("timer");
var timerDuration = 0;
var timerOn = false;
var section;
var short;
var long;
var activeTimer = null;
var sectionButton = document.getElementById("section");
var shortButton = document.getElementById("short");
var longButton = document.getElementById("long");

function pomodoroTimer(duration) {
    var timer = duration,
        minutes,
        seconds;

    return setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        display.textContent = minutes + ":" + seconds;

        if (timerOn) {
            if (--timer < 0) {
                timer = duration;
            }
        }
    }, 1000);


}

function sectionTimer() {
    sectionButton.classList.add("active-btn");
    shortButton.classList.remove("active-btn");
    longButton.classList.remove("active-btn");
    timerDuration = 25 * 60;
    timerOn = true;
    if (activeTimer != "section") {
        section = pomodoroTimer(timerDuration);
        clearInterval(short);
        clearInterval(long);
    }
    activeTimer = "section";
}

function shortTimer() {
    shortButton.classList.add("active-btn");
    longButton.classList.remove("active-btn");
    sectionButton.classList.remove("active-btn");
    timerDuration = 5 * 60;
    timerOn = true;
    if (activeTimer != "short") {
        short = pomodoroTimer(timerDuration);
        clearInterval(section);
        clearInterval(long);
    }
    activeTimer = "short";
}

function longTimer() {
    longButton.classList.add("active-btn");
    shortButton.classList.remove("active-btn");
    sectionButton.classList.remove("active-btn");
    timerDuration = 15 * 60;
    timerOn = true;
    if (activeTimer != "long") {
        long = pomodoroTimer(timerDuration);
        clearInterval(short);
        clearInterval(section);
    }
    activeTimer = "long";
}

//Pauses or plays the timer

function pauseButton() {
    var display = document.getElementById("pause");

    if (timerOn) {
        timerOn = false;
    } else {
        timerOn = true;
    }

    if (display.textContent == "Pause") {
        display.textContent = "Play";
    } else {
        display.textContent = "Pause";
    }
}

//Reset the timer

function resetTimer() {

    if (activeTimer == "section") {
        display.textContent = "25:00";
    } else if (activeTimer == "short") {
        display.textContent = "05:00";
    } else if (activeTimer == "long") {
        display.textContent = "15:00";
    }

    clearInterval(section);
    clearInterval(short);
    clearInterval(long);

    activeTimer = null;
    timerOn = false;
}