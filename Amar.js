

const HoursEl = document.getElementById("hours");
const MinutesEl = document.getElementById("minutes");
const SecondEl = document.getElementById("seconds");
const ampmsEl = document.getElementById("ampm");

function updatedclock(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "Am";

    if( hour > 12){
        hour = hour - 12;
        ampm = "Pm";
    }

    hour = hour < 10 ? "0"+hour:hour;
    minute = minute < 10 ? "0"+minute:minute;
    second = second < 10 ? "0"+second:second;
    ampm = ampm < 10 ? "0"+ampm:ampm;

    HoursEl.innerText = hour;
    MinutesEl.innerText = minute;
    SecondEl.innerText = second;
    ampmsEl.innerText = ampm;

    setTimeout(() => {
        updatedclock();
    }, 100);
}
updatedclock();