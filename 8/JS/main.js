var draw;
var ctx;
var lastX = 0;
var lastY = 0;
var isDrawing =false ;
var hue = 0;
var huw = true;
// 使用HSL来画彩虹 0是红色 360也是红色 
window.onload=function(){
    var draw = document.querySelector("#draw");
    // getContext() 方法返回一个用于在画布上绘图的环境。
    var ctx = draw.getContext('2d');
    draw.width = window.innerWidth;
    draw.height = window.innerHeight;
    // 初始的颜色吗
    ctx.strokeStyle = '#BADA55';
    // lineCap设置线条开始与结尾的线帽样式，圆形
    // lineJoin是设置了连接处的
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 20;
    ctx.globalCompositeOperation ='multiply';
    function draww(e){
        if(!isDrawing)
        {
            return;
        }
        ctx.strokeStyle =`hsl(${hue},100%,50%) `
        console.log(e);
        ctx.beginPath();
        // 起始点
        ctx.moveTo(lastX,lastY);
        // 终点
        ctx.lineTo(e.offsetX,e.offsetY);
        // Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
        hue = hue+2;
        if(hue >360){
            hue = 0;
        }
        if(huw){
            ctx.lineWidth++;
        }
        else{
            ctx.lineWidth--;
        }
        if(ctx.lineWidth >100){
            huw =false;
        }
        if(ctx.lineWidth <20){
            huw =true;
        }
    }
    // 变量命名差点重复了
    draw.addEventListener('mousemove',draww);
    // 防止从0出发
    draw.addEventListener('mousedown',(e) => {isDrawing =true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });
    draw.addEventListener('mouseup',() => isDrawing =false );
    draw.addEventListener('mouseout',() => isDrawing =false );
}    
