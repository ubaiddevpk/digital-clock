
function settime1(){
let time=new Date();
let hour =time.getHours();
if(hour>12){
document.getElementById("time").innerHTML="PM";
}
else{
  document.getElementById("time").innerHTML="AM";
}
let second=time.getSeconds();
if(second<10){
  second="0"+second;
}
let minute=time.getMinutes();
if(minute<10){
  minute="0"+minute;}
  let hour1=time.getHours();
  if(hour1>12){
    hour1=hour1-12;}
    if(hour1==0){
      hour1=12;
    }
    if(hour1<10){
      hour1="0"+hour1;
    }
let a=document.getElementById("clock").innerHTML=hour1+":"+minute+":"+second;
let date=time.getDate()
let year=time.getFullYear();

let mont = time.toLocaleString('default', { month: 'short' }); // Get the abbreviated month name
document.getElementById("date").innerHTML = date+"  "+ mont+" "+year;}
setInterval(settime1,1000)
