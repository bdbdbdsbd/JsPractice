const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

//1.find the prople who born between 1500 and 1600
//   filter()创建新的类型化数组
// filter方法对类型化数组中的元素调用提供的 callback函数，并且会为callback返回 true 的那些元素构造新的类型化数组。
// => 这个符号可以理解为一个函数
console.log("选出在1500-1600之间出生的人");
const fifteen = inventors.filter(function (inventor) {
    if(inventor.year >= 1500 && inventor.year <1600){
        return true;
    }
})
console.log(fifteen);

const fifteen2 = inventors.filter( inventor => (inventor.year >= 1500 && inventor.year <= 1600))
console.log(fifteen2);

//2.输出所有人的姓名
// 一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。
console.log("输出所有人的姓名");
const fullname=inventors.map(inventor => `${inventor.first}, ${inventor.last}`);
console.log(fullname);

//3.按照生日从长到幼排序
// compareFunction 可选用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
inventors.sort(function(a,b){
    if(a.year>b.year){
        return 1;
    }
    else{
        return -1;
    }
})
console.log("按照生日从长到幼排序");
console.log(inventors);
inventors.sort((a,b) => a.year<b.year?1:-1);
console.log("按照生日从幼到长排序");
console.log(inventors);

//4.这些人一共活了多久
console.log("这些人活了多久");
var totalYears1 = 0;
for (let index = 0; index < inventors.length; index++) {
     totalYears1 += inventors[index].passed- inventors[index].year;   
}
console.log(totalYears1);
var totalYears2 = 0;
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
totalYears2 = inventors.reduce((total,inventor) => {return total+(inventor.passed-inventor.year);},0);
console.log(totalYears2);

//5. 根据活着的年份来排序
console.log("根据活着的年份来排序");
inventors.sort( (a,b) => (a.passed-a.year)< (b.passed-b.year)?1:-1 );
console.log(inventors);

//6.