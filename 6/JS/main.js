window.onload=function(){
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    let cities=[];
    // fetch
    // Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。
    // 这个会返回一个Promise
    const prom =fetch(endpoint);
    console.log(prom);
    // Promise.prototype.then()
    // then() 方法返回一个 Promise (en-US)。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
    // promise.then(onCompleted, onRejected);
    // promise必需。Promise 对象。
    // onCompleted必需。承诺成功完成时要运行的履行处理程序函数。
    // onRejected可选。承诺被拒绝时要运行的错误处理程序函数
    // prom.then(Blob => console.log(Blob));
    prom.then(Blob =>Blob.json)
    .then(data => cities=data);
    console.log(cities);
}

