import App from "./App.js";
import KanbanAPI from "../kanbanApi/KanbanAPI.js";

const root = document.getElementById("app");
let app;
app = new App(root);

function clock() {

    let dname = new Date().getDay();
    let dayNum = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    Number.prototype.pad = function(digits) {
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const ids = ["dayname", "daynum", "month", "year"];
    const values = [week[dname], dayNum.pad(2), months[month], year];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerHTML = h.pad(2);
    minutes.innerHTML = m.pad(2);
    seconds.innerHTML = s.pad(2);
}

let interval;
interval = setInterval(clock, 1000);

// KanbanAPI.deleteItem(87654);

// console.log(KanbanAPI.getItems(1));
// console.log(KanbanAPI.getItems(2));
// console.log(KanbanAPI.getItems(3));
