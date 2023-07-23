const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const second = date.getSeconds();
    const Minute = date.getMinutes();
    const Hour = date.getHours();
    clock.innerText = `${String(Hour).padStart(2,"0")}:${String(Minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`
}
setInterval(getClock, 1000)

