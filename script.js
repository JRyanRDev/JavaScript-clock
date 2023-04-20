const hourSpc = document.getElementById("hour");
const minSpc = document.getElementById("min");
const secSpc = document.getElementById("sec");
const back = document.getElementById("content-wrapper");
const welcomeTxt = document.querySelector("div#text h3");

function checkTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    
    h < 10 ? h = "0" + h : h = h;
    hourSpc.textContent = `${h}:`;

    m < 10 ? m = "0" + m : m = m;
    minSpc.textContent = `${m}:`;

    s < 10 ? s = "0" + s : s = s;
    secSpc.textContent = `${s}`; 
    
    if (h > 5 && h < 12) {
        welcomeTxt.textContent = "Good morning!";
    }
    else if (h > 12 && h < 18) {
        welcomeTxt.textContent = "Good afternoon!";
    }
    else if (h >= 18 && h < 19) {
        welcomeTxt.textContent = "Good evening!";
        back.style.cssText = "background-color: #000; color: #fff";
    }
    else {
        welcomeTxt.textContent = "Good night!"
        back.style.cssText = "background-color: #000; color: #fff";
    }
}


setInterval(checkTime, 1000);