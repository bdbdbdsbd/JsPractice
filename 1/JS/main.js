window.onload=function(){
    // Array Form 相当于生成一个数组
    // 在这里不加也没啥
    var keys=(document.querySelectorAll('.key'));
    // transitionend 事件是双向触发的 - 当完成到转换状态的过渡，以及完全恢复到默认或非转换状态时都会触发。 如果没有过渡延迟或持续时间，即两者的值都为0s或者都未声明， 则不发生过渡，并且任何过渡事件都不会触发。
    // forEach() 方法对数组的每个元素执行一次给定的函数。
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound); 
}
function removeTransition(e) {
    // 当发生transitionend事件时，propertyName属性返回与转换关联的CSS属性的名称。
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    if(key.classList[1]!='playing'){
        key.classList.add('playing');
    }
    audio.currentTime = 0;
    audio.play();
}