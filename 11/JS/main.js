var line =document.querySelector(".line");
var video = document.querySelector("video");
var playbutton = document.querySelector(".toggle");
var backbutton = document.querySelectorAll("[data-skip]");
console.log(backbutton);

function togglePlay(){
    const method = video.paused ? 'play':"pause";
    video[method]();
    const icon = video.paused ? '►':"❚❚";
    playbutton.innerHTML=icon;
}

function skipp(){
    // parseFloat() 函数可解析一个字符串，并返回一个浮点数。
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
function updateline(){
    line.style.width = `${video.currentTime/video.duration*100}%`;
}
video.addEventListener("click",togglePlay);
video.addEventListener("timeupdate",updateline);
// video.addEventListener("paused",updateButton);
playbutton.addEventListener("click",togglePlay);
backbutton.forEach(bb => bb.addEventListener("click",skipp));