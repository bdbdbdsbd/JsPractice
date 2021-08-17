window.onload=function(){
    part = document.querySelectorAll(".part");
    part.forEach(element => {element.addEventListener('click',open)});
}
function open(){
    this.classList.toggle('open');
}