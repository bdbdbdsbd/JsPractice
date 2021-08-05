window.onload=function(){
    var bd =document.querySelector(".bd");
    bd.addEventListener('click',makeG);
}
function makeG(e){
    console.log(e);
    e.srcElement.style.color = "#BADA55";
    e.srcElement.style.fontSize = "70px";
}
// 打断点可以用break on
// subtree modifications 子节点修改
// attribute modifications 自身属性修改
// node removal 自身节点被删除 
// console.log
console.log("hello");
console.log("Hello I am a %s string",'🖊');
console.log("");
console.log("%c I am great",'font-size:50px;background:lightgray;text-shadow:0 0 10px rgba(0,0,0,0.3);')
// warn
console.warn("OHHHHHHHHH");
// error
console.error("SHIT");
// 信息
console.info("just little info")
// 断言
console.assert( 1===2, "it's wrong" )
// 清除
// console.clear();

// console.group();