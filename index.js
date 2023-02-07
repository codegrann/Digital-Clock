
let watch=document.querySelector("#time");


// console.log(time.getHours());
// console.log(time.getMinutes());



function display(){
    let time=new Date();
    watch.innerText=`${time.getHours()}: ${time.getMinutes()}:${time.getSeconds()}`;
    // watch.innerText=`${time}`;
}
setInterval(display, 1000);

function rotate(){
    let secHand=document.querySelector("#secHand");
    let time=new Date();
    let sec=time.getSeconds();
    console.log(sec);
    secDegree=((sec/60)*360) + 90;
    // secHand.style.height="10px";
    secHand.style.transform=`rotate(${secDegree}deg)`;
}
setInterval(rotate, 1000);