let daysItem = document.querySelector(".days")
let hourItem = document.querySelector(".hour")
let mintuesItem = document.querySelector(".mintues")
let SecondsItem = document.querySelector(".Seconds")

let countDown = () => {
    let fuDate = new Date("23 march 2023");
    let curruDate = new Date();
    let iamDate = fuDate - curruDate;

    let days = Math.floor(iamDate / 1000 / 60 / 60 / 24);
    let hour = Math.floor(iamDate / 1000 / 60 / 60) % 24;
    let mintues = Math.floor(iamDate / 1000 / 60) % 60;
    let Seconds = Math.floor(iamDate / 1000) % 60;

    daysItem.innerHTML = days;
    hourItem.innerHTML = hour;
    mintuesItem.innerHTML = mintues;
    SecondsItem.innerHTML = Seconds;
}
countDown();
setInterval(countDown, 1000);
