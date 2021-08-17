window.onload=function(){
    hour=document.getElementsByClassName('hour_hand')[0];
    min=document.getElementsByClassName('min_hand')[0];
    sec=document.getElementsByClassName('second_hand')[0];
    setInterval(setDate,1000);
}
function setDate(){
    const now =new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60)*360+90 ;
    sec.style.transform=`translateX(-50%) rotate(${secondsDegrees}deg)` ;
    const mins = now.getMinutes();
    const minsDegrees = (mins/60+seconds/3600)*360+90 ;
    min.style.transform=`translateX(-50%) rotate(${minsDegrees}deg)` ;
    const hours = now.getHours();
    const hoursDegrees = (hours/12+mins/720+seconds/3600/12)*360+90;
    hour.style.transform=`translateX(-50%) rotate(${hoursDegrees}deg)` ;
}