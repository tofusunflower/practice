// // 取得勾選的項目內容
// // 1. 找到按鈕
// let myBtn = document.querySelector('#btn');
// let drinks = document.getElementsByName('drinks');
// let selectedItemsList = document.getElementById('selectedItems');
// let notselectedItemsList = document.getElementById('notselectedItems');

// // 2. 監聽按鈕是否被按了(click => 事件)
// myBtn.addEventListener('click', () => {
//     selectedItemsList.innerHTML = '被勾選飲料';
//     notselectedItemsList.innerHTML = '沒被勾選飲料';

//     for (let i = 0; i < drinks.length; i++) {
//         if (drinks[i].checked) {
//             selectedItemsList.innerHTML += `<li>${drinks[i].value}</li>`
//         }
//     }
// })


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



let str1='';
if(result.length>0){
    str1 ='<div><ul id="sel">被勾選項目';
    // 被選取的li
    for(let i =0;i<result.length;i++){
        str1+= `<li>${result[i]}</li>`
    }
    str1 = str1+'</ul></div>';
}

let getDiv = document.getElementById('showData');
getDiv.innerHTML = str1;
})