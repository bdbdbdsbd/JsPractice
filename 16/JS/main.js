window.onload = function(){
    const main = document.querySelector(".main");
    const p = document.querySelector("p");
    var walk = 100;
    function shadow(e){
        // const width = main.offsetWidth;
        // 一个新的写法
        const{ offsetWidth :width,offsetHeight :height } = main;
        const{ offsetWidth :width2,offsetHeight :height2} = p;
        const{ offsetX :x,offsetY :y } = e;
        //var rota = ((x-width/2)+0.0001/width)/((y-height/2+0.0001)/height);
        if(this == e.target){
            //var xWalk = (x / width * walk)-walk/2;
            //var yWalk = (y / height * walk)-walk/2;
            //console.log(xWalk, yWalk);
        }
        if(this != e.target){
            var xWalk = (x / width2 * walk)-walk/2;
            var yWalk = (y / height2 * walk)-walk/2;
            //console.log(xWalk, yWalk);
        }
        p.style.textShadow = `
        ${xWalk}px ${yWalk}px 0px rgba(255, 0, 0, 0.8),
        ${xWalk*-1}px ${yWalk*-1}px 0px rgba(0, 255, 0, 0.8),
        ${xWalk*1}px ${yWalk*-1}px 0px rgba(0, 0, 255, 0.8),
        ${xWalk*-1}px ${yWalk*1}px 0px rgba(0, 255, 255, 0.8)
        `;
       
    }
    main.addEventListener("mousemove",shadow);
    
}