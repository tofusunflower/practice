//else if-if

let a = 2;//建立變數值

//檢查變數a的內容是否完全等於1
//完全等於=>左右兩邊的資料形態要相同
if (a === 1) {
    console.log('spring');
} else if (a === 2) {
    console.log('summer');
} else if (a === 3) {
    console.log('autumn');
} else if (a === 4) {
    console.log('winter');
} else {
    //以上條件都不是
    console.log('error')
}

//switch case/break/default
//break可以使用的範圍:1.switch 2.迴圈內
let b = 1;
switch (b) {
    case 1:
        console.log('spring');
        break;
    case 2:
        console.log('summer');
        break;
    case 3:
        console.log('autumn');
        break;
    case 4:
        console.log('winter');
        break;
    //以上結果都不是
    default:
        console.log('error');
}



