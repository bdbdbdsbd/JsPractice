// window.onload = function(){
    // 应该加form 而不是那个按键
    const submit_item = document.querySelector("form");
    const itemList = document.querySelector(".itemList");
    textItem = document.querySelector('[name=item]');
    const items =[];
    console.log(textItem.value);
    function addItems(e){
        // 不刷新页面了
        e.preventDefault();
        const text = textItem.value;
        const item ={
            text:text,
            done:false
        }
        items.push(item);
        this.reset();
        e.preventDefault();
        console.log(items);
        populateList(items,itemList);
    }
    
    function populateList( plates ,platesList){
        console.log(platesList)
        platesList.innerHTML=plates.map( (plate,i) => {
            return `
            <div class="smallItem">
            
            <li>
            <input type ="checkbox" data-index=${i} id="item${i}">
            <label for="item${i}">${plate.text}</label>
            </li>
            </div>
            `;
        }
        ).join('');
    }
    submit_item.addEventListener('submit',addItems);