let hours = 13;
let minutes = 59;


minutes = minutes + 1;


if (minutes >= 60){
 hours = hours + 1;
 minutes = 0;
}

if (minutes < 10){
    minutes = '0' + minutes;
}

document.querySelector("#clock").textContent = hours + ":" + minutes;