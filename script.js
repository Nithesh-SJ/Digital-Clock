const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');


const clock=setInterval(function time()  {
    let date=new Date();
    let hrs=date.getHours();
    let mins=date.getMinutes();
    let sec=date.getSeconds();
   
    if(hrs<10){
        hrs='0'+hrs;
    }
    if(mins<10){
        mins='0'+mins;
    }
    if(sec<10){
        sec='0'+sec;
    }
   
    hour.textContent=hrs;
    minute.textContent=mins;
    second.textContent=sec;
    
}, 1000);
