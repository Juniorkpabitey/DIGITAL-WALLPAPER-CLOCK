const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const AMEl = document.getElementById("AM")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let AM = "AM"

    if(h> 12){
        h =h-12
        AM = "PM"
    }
    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    AMEl, (innerText = AM);
    setTimeout(()=>{
        updateClock()

    }, 100)


}

updateClock()