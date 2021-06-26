const workTimeInput = document.querySelector(".work__input");
const relaxTimeInput = document.querySelector(".relax__input");
const tracker = document.querySelector(".timer");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const continueButton = document.querySelector("#continue-button");
const stopButton = document.querySelector("#stop-button");
const textInput = document.querySelector(".tracker-info");
const htmlText = document.querySelector(".tracker-info__text");
const bell = document.querySelector("audio");
let clockRun = false;
let type = "Work";
let relaxTime;
let workTime;
let time;


startButton.addEventListener("click" , () =>{
    workTime = workTimeInput.value;
    relaxTime = relaxTimeInput.value;
    time = workTime * 60;
    toggleClock();
})

pauseButton.addEventListener("click" , () =>{
    toggleClock();
});

continueButton.addEventListener("click" , () =>{
    toggleClock();
})

stopButton.addEventListener("click" , () =>{
    toggleClock(true);
})

const toggleClock = (reset) =>{
    if(reset){
        stopClock();
    }else if(clockRun === true){
        clockRun =false;
        clearInterval(clockTimer);
    }else{
        clockRun = true;
        clockTimer = setInterval(() =>{
            stepDown();
            setTimer();
        }, 1000);
    } 
};

function setTimer(){
    let result = "";
    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time / 60) % 60;
    let seconds = Math.floor(time % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;
    if(hours > 0) result += `${hours}:`
    result += `${minutes}:${seconds}`;

    tracker.innerHTML = result;
};


function stopClock(){
    if(type === "Relax"){
        clearInterval(clockTimer);
        clockRun = false;
        time = relaxTimeInput.value * 60;
        setTimer();
    }else{
        clearInterval(clockTimer);
        clockRun = false;
        time = workTimeInput.value * 60;
        setTimer();
    }
};

function stepDown(){
    if(time > 0){
        time --;
    }else if( time === 0){
        bell.play();
        if(type === "Work"){
            type = "Relax";
            time = relaxTimeInput.value * 60;
            changeBackground();
        }else{
           time = workTimeInput.value * 60;
           type = "Work";
           changeBackground();
        }
    }
};

function changeBackground(){
    if(type === "Relax"){
        textInput.classList.add("active");
        let relaxText = document.createElement("p");
        relaxText.className ="tracker-info__text";
        relaxText.innerHTML = "Время отдохнуть!";
        htmlText.replaceWith(relaxText);
    }else{
        let workText = document.createElement("p");
        workText.className ="tracker-info__text";
        workText.innerHTML = "Время продуктивно поработать!";
        htmlText.replaceWith(workText);
        textInput.classList.remove("active");
    }
};