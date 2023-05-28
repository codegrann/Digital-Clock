function display() {
    let watch = document.querySelector("#time");
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    hour = hour < 10 ? hour = `0${hour}` : hour;
    
    min = min < 10 ? min = `0${min}` : min;
    sec = sec < 10 ? sec = `0${sec}` : sec;
    watch.innerText = `${hour}: ${min}:${sec}`;
    // watch.innerText=`${time}`;
}
setInterval(display, 1000);

function rotate() {
    let secHand = document.querySelector("#secHand");
    let minHand = document.querySelector("#minuteHand");
    let hourHand = document.querySelector("#hourHand");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hour = time.getHours();

    console.log(hour);
    hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


    // console.log(min);
    minDegree = ((min / 60) * 360) + 90;
    // console.log(minDegree);
    minHand.style.transform = `rotate(${minDegree}deg)`

    // console.log(sec);
    secDegree = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;
}
setInterval(rotate, 1000);