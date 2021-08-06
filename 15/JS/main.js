// window.onload = function(){
    const submit_item = document.querySelector("#submit");
    const items =[];
    function addItems(e){
        // 不刷新页面了
        e.preventDefault();
        console.log(e);
        const text = this.querySelector('[name=item]').value;
        console.log(this);
        const item ={
            text:text,
            done:false
        }
        console.log(item);
        this.querySelector();
    }
    submit_item.addEventListener('submit',addItems);
// }