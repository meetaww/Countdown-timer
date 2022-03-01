const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secsE1 = document.getElementById('secs');

const newYears = `1 Jan ${dt.getFullYear() + 1 }`
// const newYears = '1 Jan 2023';

function countdown(){
    const newYearDate = new Date(newYears)
    const currentDate  = new Date();

    const totalSeconds = (newYearDate - currentDate) /1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600 ) %24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const secs = Math.floor(totalSeconds ) %60;

    console.log(days, hours, mins, secs)
    
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secsE1.innerHTML = secs;

}

function formatTime(time){
    return time < 10 ? (`0$(time)`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000)


