
let watch=document.querySelector("#time");



function display(){
    let time=new Date();
    watch.innerText=`${time.getHours()}: ${time.getMinutes()}:${time.getSeconds()}`;
    // watch.innerText=`${time}`;
}
setInterval(display, 1000);

function rotate(){
    let secHand=document.querySelector("#secHand");
    let minHand=document.querySelector("#minuteHand");
    let hourHand=document.querySelector("#hourHand");
    let time=new Date();
    let sec=time.getSeconds();
    let min=time.getMinutes();


    // console.log(min);
    minDegree=((min/360) *360)+ 240;
    console.log(minDegree);
    minHand.style.transform=`rotate(${minDegree}deg)`
    
    // console.log(sec);
    secDegree=((sec/60)*360) + 90;
    secHand.style.transform=`rotate(${secDegree}deg)`;
}
setInterval(rotate, 1000);