// 取得送出按鈕
let btn = document.getElementById('btn');
// 建立一個存放選取結果的變數，初始值為'未選取'
let result = '';
// 監聽按鈕的點擊事件
btn.addEventListener('click', ()=> {
    // 取得下拉式方塊
    let city = document.getElementById('city');
    // 使用迴圈逐一檢查選項是否被選取
    for (let i = 0; i < city.length; i++) {
        if (city[i].selected && city[i].value !== '') {
            result = city[i].value;
            break; // 找到選取的選項後即可停止
        }else if(city[i].value == ''){
            result = '未選取';
        }
    }
    console.log(result); // 輸出結果
});