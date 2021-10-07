import App from "./App.js";

const root = document.getElementById("app");
let app;
app = new App(root);

function clock() {
    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

let interval;
interval = setInterval(clock, 1000);
