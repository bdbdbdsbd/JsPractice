// 一个小练习

// 一个按键的事件
// 会出现KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
var keyList=[];
const secret = "bdbdsbd"
window.addEventListener("keyup",(e)=>
{   console.log(e.key);
    keyList.push(e.key);
    
    // 去除首个元素
    // 第一个参数就是-8，当数组长度为8的时候去除第一个元素
    // 负值表示从数组末位开始的第几位
    // 第二个参数是要删除的个数，0 或者负数，则不移除元素
    keyList.splice(-secret.length-1,keyList.length-secret.length);
    console.log(keyList);
    if(keyList.join('').includes(secret)){
        console.log("PASS");
        cornify_add();
    }
}
);
/*
 
    _______      ,-----.    .-------.    ,---.   .--..-./`)  ________    ____     __  
   /   __  \   .'  .-,  '.  |  _ _   \   |    \  |  |\ .-.')|        |   \   \   /  / 
  | ,_/  \__) / ,-.|  \ _ \ | ( ' )  |   |  ,  \ |  |/ `-' \|   .----'    \  _. /  '  
,-./  )      ;  \  '_ /  | :|(_ o _) /   |  |\_ \|  | `-'`"`|  _|____      _( )_ .'   
\  '_ '`)    |  _`,/ \ _/  || (_,_).' __ |  _( )_\  | .---. |_( )_   | ___(_ o _)'    
 > (_)  )  __: (  '\_/ \   ;|  |\ \  |  || (_ o _)  | |   | (_ o._)__||   |(_,_)'     
(  .  .-'_/  )\ `"/  \  ) / |  | \ `'   /|  (_,_)\  | |   | |(_,_)    |   `-'  /      
 `-'`-'     /  '. \_/``".'  |  |  \    / |  |    |  | |   | |   |      \      /       
   `._____.'     '-----'    ''-'   `'-'  '--'    '--' '---' '---'       `-..-'        
                                                                                      

*/
