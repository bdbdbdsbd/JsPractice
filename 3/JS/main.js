window.onload=function(){
    inputs= document.querySelectorAll('.top input');
    console.log(inputs);
    // inputs.forEach(input => input.addEventListener('change',handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));    
}
function handleUpdate(){
    console.log(this.value);
    const suffix= this.dataset.sizing || '';//防止 空 出现
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}