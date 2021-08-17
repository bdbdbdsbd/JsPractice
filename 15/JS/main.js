// window.onload = function(){
    // 应该加form 而不是那个按键
    // items是存储的值
    // itemList是根据items来改变的元素
    const submit_item = document.querySelector("form");
    var itemList = document.querySelector(".itemList");
    textItem = document.querySelector('[name=item]');
    // items =[];
    var items =JSON.parse(localStorage.getItem("items"));
    populateList(items,itemList);
    var smallItems = document.querySelectorAll(".smallItem");
    function addItems(e){
        // 不刷新页面了
        e.preventDefault();
        const text = textItem.value;
        const item ={
            text:text,
            done:false
        }
        items.push(item);
        // 开始了，存进local 存储里面
        // 但是不能直接放，因为是转换成数组的
        // localStorage.setItem("items",items);
        localStorage.setItem("items",JSON.stringify(items));
        this.reset();
        e.preventDefault();
        console.log(items);
        populateList(items,itemList);
        smallItems.forEach(it => it.addEventListener('change',toggleDone));
    }
    
    function populateList( plates ,platesList){
        // console.log(platesList)
        platesList.innerHTML=plates.map( (plate,i) => {
            let checkFlag = plate.done?"checked":"";
            console.log(checkFlag);
            return `
            <div class="smallItem">
            
            <li>
            <input type ="checkbox" data-index=${i} id="item${i}" ${checkFlag}>
            <label for="item${i}" c>${plate.text}</label>
            </li>
            </div>
            `;
        }
        ).join('');
    }

    function toggleDone(e){
        console.log(e.target);
        // 读取数据来了
        index = (e.target.dataset.index);
        // console.log(itemList[index].innerHTML);
        items[index].done = !items[index].done
        console.log(items[index].done);
        // console.log(this);
        localStorage.setItem("items",JSON.stringify(items));
    }
    // console.log(itemList);
    submit_item.addEventListener('submit',addItems);
    smallItems.forEach(it => it.addEventListener('change',toggleDone));

    