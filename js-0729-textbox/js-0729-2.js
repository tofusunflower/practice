// 使用name屬性，取得元素內容
// let drinks = document.getElementsByName('drinks')
// console.log(drinks)

// for(let i =0; i<drinks.length;i++){
//     console.log(drinks.item(i).value);
//     console.log(drinks[i].value)
// }

// 取得勾選的項目內容
// 1. 找到按鈕
let myBtn = document.querySelector('#btn');
// 2. 監聽按鈕是否被按了(click => 事件)
myBtn.addEventListener('click',function(){
    let result=[];
    let nonresult=[];
    let drinks = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選=> checked
    for(let i=0;i<drinks.length;i++){

        // 有被選
        if(drinks[i].checked){
            result.push(drinks[i].value);
        }

        // 沒有被勾選
        if(!drinks[i].checked){
            nonresult.push(drinks[i].value);
        }
    }
    console.log('被勾選的項目：'+result);
    console.log('沒有被勾選的項目：'+nonresult);
})
