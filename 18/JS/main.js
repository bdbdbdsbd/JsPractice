window.onload = function() {
    //const timeNodes = document.querySelectorAll('[data-time]');
    //直接这么做要出事，那么就把它变成数组
    const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
    console.log(timeNodes);
    const seconds = timeNodes.map(node => node.dataset.time);
    var timeList = seconds.map(timeN => {
        // .map(parseFloat) 转换浮点数
        const [min, sec] = timeN.split(':').map(parseFloat);
        return min * 60 + sec;
    })

    timeList.sort((a, b) => {
        return a > b ? 1 : -1;
    })
    console.log(timeList);
    var i = 0;
    ti = seconds.map(eTime => {
        const [eMin, eSec] = eTime.split(':').map(parseFloat);
        i = i + eMin * 60 + eSec;
        return eMin * 60 + eSec;
    });


    console.log(i);
}