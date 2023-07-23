
const APIKEY = "7192f76c2ee8498998a8c8e731946556"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })
}

function onGeoError(){
    alert("cant find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);