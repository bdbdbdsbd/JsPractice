window.onload=function(){
    const check = document.querySelectorAll("input");
    check.forEach(ch => ch.addEventListener("click",change));
}
function change(e){
    e.srcElement.parentNode.classList.toggle('cl');
}