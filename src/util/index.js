// 截流
function closure(func, date){
    let timeId = null;
    if(timeId){
        clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
        func();
        timeId = null;
    }, date);
}

export { closure };