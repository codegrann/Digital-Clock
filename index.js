
let watch=document.querySelector("#time");
let time=new Date();
// console.log(time.getHours());
// console.log(time.getMinutes());



function display(){
    // watch.style.backgroundColor="red";
    watch.innerText=`${time.getHours()}: ${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`;
    // watch.innerText=`${time}`;
}

setInterval(display, 1000);