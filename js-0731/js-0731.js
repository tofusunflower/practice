// 取得送出按鈕
let btn = document.getElementById('btn');
// let mybtn = document.querySelector('#btn');

// 監聽按鈕行為
btn.addEventListener('click', () => {
    let result = '';
    // 取得科目的全部
    let subject = document.getElementsByName('subject');
    // 使用迴圈逐一檢查是否被選取 => checked
    for (i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
            // 取得選像按鈕的值
            result = subject[i].value;
            // 因為是單選，所以找到後就結束迴圈
            break;
        }
    }
    console.log(result);
});
