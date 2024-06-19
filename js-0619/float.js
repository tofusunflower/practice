//var
  //var a;
  //var a = b;
  //允許同個檔案中的變數重複宣告

//const
  //const宣告固定值，一旦宣告就不能再更改=>常數

//let
  //不許允同檔中變數重複宣告



let price =100;
let qty=10;

// console.log("單價" + pric + "元");
// console.log("數量" + qty);
// console.log("總計" + price * qty + "元");

console.log(`單價: ${price}`); 
console.log(`數量: ${qty}`); 
console.log(`總計: ${qty * price}`); 


// 字串變數
let strName='pil';
let strNum='940428'
console.log(`princess:${strName}`);

// 取得資料型態=>typeof
console.log(typeof(strName));
// 資料型態轉換(暫時轉換)
console.log(`公主生日:${Number(strNum)}`)

strNum=Number(strNum);

// float 浮點數 帶有小數點資料
let pi=3.14;
let r =5;
let area = r*r*pi;
console.log(parseInt(area)); //取整數(無條件捨去到整數位)
console.log(area.toFixed(2)); //取出小數點第二位，回傳型態為字串

// 駝峰式命名
// 大駝峰:每個單字字首大寫
// 小駝峰:第二個單字開始字首大寫

