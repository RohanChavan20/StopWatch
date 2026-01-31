
let timerdisplay=document.querySelector('.timerDisplay');
let reset=document.getElementById('reset');
let start=document.getElementById('start');
let stops=document.getElementById('stop');

let msec=0;
let secs=0;
let mins=0;

let timerid=null;

start.addEventListener('click',function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid=setInterval(startTimer,10);
    console.log(timerid)
})

stops.addEventListener('click',function(){
    clearInterval(timerid);
})

reset.addEventListener('click',function(){
    clearInterval(timerid);
    timerdisplay.innerHTML=`00:00:00`;
    msec=0;
    secs=0;
    mins=0;
})

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }
    let msecString=msec< 10 ? `0${msec}`: msec;
    let secsString=secs< 10 ? `0${secs}`: secs;
    let minsString=mins< 10 ? `0${mins}`: mins;

    timerdisplay.innerHTML= `${minsString} : ${secsString} : ${msecString}`;
}

