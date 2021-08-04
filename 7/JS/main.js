 const people = [
    { name: 'Wes', year: 2008 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2017 }
  ];

  const comments = [
    { text: 'Love this!', id: 823423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  //1. 判断是否全部成年
  //some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
  const isAdult = people.some(function(person){
    const currentYear = (new Date()).getUTCFullYear();
    if( currentYear - person.year >=19){
        return true;
    }
  })
  console.log({isAdult});
  const isAdult2 = people.some(
    person => {
     return   (new Date()).getFullYear()-person.year>=19;
    } 
  );
  console.log({isAdult2});
  //every() 方法测试数组中是不是全部元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
  const isAdult3 = people.every(
    person => {
     return   (new Date()).getFullYear()-person.year>=19;
    } 
  );
  console.log({isAdult3});
  
  //2. 查找符合ID的人员
  //  filter是全部查找 find是找第一个
  const comment =comments.filter(
    comment => comment.id==823423
  );
  const comment2 =comments.find(
    comment => comment.id==823423
  );
  console.log(comment);
  console.log(comment2);

  // 3. 符合ID的第一个人员的位置
  // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
  const index =comments.findIndex(
      comment => comment.id==823423
  );
  console.log(index);

  //4. 数组删除
  // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
  // 第一个是起始位置，第二个是要删除的数量
//   comments.splice(index,1);
  const newComments = [
    ...comments.splice(0,index),
    ...comments.splice(index+1)
  ];
  console.log(newComments);

  //


