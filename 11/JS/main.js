var line =document.querySelector(".line");
var lline =document.querySelector(".lline");
var video = document.querySelector("video");
var playbutton = document.querySelector(".toggle");
var backbutton = document.querySelectorAll("[data-skip]");
console.log(backbutton);
var inputr = document.querySelectorAll("input");
function togglePlay(){
    const method = video.paused ? 'play':"pause";
    video[method]();
    const icon = video.paused ? '►':"❚❚";
    playbutton.innerHTML=icon;
}

function skipp(){
    // parseFloat() 函数可解析一个字符串，并返回一个浮点数。
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
function updateline(){
    line.style.width = `${video.currentTime/video.duration*100}%`;
}
function handleRangeUpdate(){
    // console.log("this.name");
    // console.log("this.value");
    video[this.name]=this.value;
}
function updateVideo(e){
    console.log(e.offsetX);
    // console.log(this);
    const upTime = e.offsetX/video.offsetWidth*video.duration;
    console.log(upTime);
    video.currentTime = parseFloat(`${upTime}%`);
}
video.addEventListener("click",togglePlay);
video.addEventListener("timeupdate",updateline);
// video.addEventListener("paused",updateButton);
playbutton.addEventListener("click",togglePlay);
backbutton.forEach(bb => bb.addEventListener("click",skipp));
inputr.forEach(inr =>inr.addEventListener("mousemove",handleRangeUpdate));
lline.addEventListener("click",updateVideo);
var mouseDown = false;
// add this ,you can drag it
lline.addEventListener("mousemove",(e) => {if(mouseDown){updateVideo(e);}});
lline.addEventListener("mousedown",() => mouseDown = true);
lline.addEventListener("mouseup",() => mouseDown = false);