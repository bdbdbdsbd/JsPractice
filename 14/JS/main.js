// 拷贝模式
let age = 100;
let age2 = age;
console.log(age,age2);
// 100 100
age = 200;
console.log(age,age2);
// 200 100 
// 同样的结论适用于字符串

// 但是数组就不一样了
console.log(1);
const players =['sd','sds','fg'];
const copyers = players;
console.log(players,copyers);
// ["sd", "sds", "fg"]  ["sd", "sds", "fg"]
players[2] ='le';
copyers[1] ='ca';
console.log(players,copyers);
//   ["sd", "ca", "le"] ["sd", "ca", "le"]
// 没错，两个都变了

console.log(2);
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝
const players2 =['sd','sds','fg'];
// 浅拷贝来了
const copyers2 = players2.slice();
console.log(players2,copyers2);
// ["sd", "sds", "fg"]  ["sd", "sds", "fg"]
players2[2] ='le';
copyers2[1] ='ca';
console.log(players2,copyers2);
//  ["sd", "sds", "le"] ["sd", "ca", "fg"]


console.log(3);
// 
const players3 =['sd','sds','fg'];
// 浅拷贝来了
const copyers3 = [].concat(players3);
console.log(players3,copyers3);
// ["sd", "sds", "fg"]  ["sd", "sds", "fg"]
players3[2] ='le';
copyers3[1] ='ca';
console.log(players3,copyers3);
//  ["sd", "sds", "le"] ["sd", "ca", "fg"]

console.log(4);
// 
const players4 =['sd','sds','fg'];
// 浅拷贝来了
const copyers4 = [...players4];
console.log(players4,copyers4);
// ["sd", "sds", "fg"]  ["sd", "sds", "fg"]
players4[2] ='le';
copyers4[1] ='ca';
console.log(players4,copyers4);
//  ["sd", "sds", "le"] ["sd", "ca", "fg"]

console.log(5);
// 
const players5 =['sd','sds','fg'];
// 浅拷贝来了
const copyers5 = Array.from(players5);
console.log(players5,copyers5);
// ["sd", "sds", "fg"]  ["sd", "sds", "fg"]
players5[2] ='le';
copyers5[1] ='ca';
console.log(players5,copyers5);
//  ["sd", "sds", "le"] ["sd", "ca", "fg"]