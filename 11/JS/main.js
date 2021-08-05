var line =document.querySelector(".line");
var video = document.querySelector("video");
var playbutton = document.querySelector(".toggle");
var backbutton = document.querySelector(".player__button");


function togglePlay(){
        const method = video.paused ? 'play':"pause";
        video[method]();
}

