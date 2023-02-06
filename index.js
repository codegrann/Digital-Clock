
let watch=document.getElementById("time");
let time=new Date();
console.log(time.getHours());
console.log(time.getMinutes());

function display(){
    watch.style.backgroundColor="red";
    watch.innerHTML=`${time.getHours()}: ${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`;
}

setInterval(display, 1);