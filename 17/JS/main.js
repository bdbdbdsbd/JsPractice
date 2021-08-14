const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
// 必须是1和-1
const orderBands = bands.sort((a,b) => {return a>b?1:-1;})
console.log(orderBands);
orderBands.forEach(i => { console.log(i.replace(/^(a|The|An)/i," ").trim()); });
console.log(orderBands);