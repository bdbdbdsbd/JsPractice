// 一直滚动检测太消耗了，不太好
// 而且给0.05s的动画一点时间
// 函数去抖(debounce)-- js事件延迟执行
// 当调用函数n秒后，才会执行该动作，若在这n秒内又调用该函数则将取消前一次并重新计算执行时间
function debounce(func, wait = 10, immediate = true) {
    // 时间
    // immediate可以跳过这个延时
    var timeout;
    return function() {
      var context = this, args = arguments;
    //   console.log(2);
      var later = function() {
        // 销毁定时器
        timeout = null;
        // console.log(timeout);
        // func.apply(context, args); 
        // 相当于 context.func(args)
        if (!immediate) func.apply(context, args);
      };
      // 如果immediate可以,并且timeout 没了,就立即执行
      // console.log(!null); 就是true
      // console.log(!unundefined);也是true
      // 个人观点,没计时完就是none,也就是说可以立即执行,搞不明白
      var callNow = immediate && !timeout;
      // clearTimeout()方法取消了先前通过调用setTimeout()建立的定时器。
      // 如果是setTimeout的时间还没到,这个会直接清空重来
      clearTimeout(timeout);
    //   console.log(timeout);
      // 返回值timeoutID是一个正整数，表示定时器的编号。这个值可以传递给clearTimeout()来取消该定时器。
      timeout = setTimeout(later, wait);
    //   console.log(timeout);
      if (callNow) func.apply(context, args);
    };
  }
window.onload  = function(){ 
    window.addEventListener("scroll",debounce(picShow));
    imgList = document.querySelectorAll("img");
    function picShow(e){
    // console.count(e);
        imgList.forEach(im => {
            const realHeight = window.scrollY+window.innerHeight;
            const imgBottom = im.offsetTop + im.height/2;
            const isArrive = realHeight > imgBottom;
            const isLeave = window.scrollY < (im.offsetTop + im.height);

            if(isArrive && isLeave){
                im.classList.add('active');
            }
            else{
                im.classList.remove('active');
            }
            
        });
    }
}
