// let weight = 1.67;
// let height = 50;
// let bmi;

// bmi=height/(weight*weight);

// bmi=bmi.toFixed(2);
// bmi=Number(bmi);

// if(bmi<18.5){
//     console.log("過輕");
// }

// if(bmi>=18.5 && bmi<=24){
//     console.log("正常");
// }
// if(bmi<24&&<=27){
//     console.log("過重");
// }

// if(bmi>35){
//     console.log("重度肥胖")
// }








// 執行一個calBmi函數定義bmi計算
// function calBmi(weight, height) {
//     const bmi = weight / (height * height);
//     return bmi;
// };

// const result = calBmi(50, 1.7);
// console.log(result);

// console.log(result);

// if (result < 18.5) {
//     console.log("過輕");else if (18.5 < result <= 24) {
//     console.log("正常");
// } 
// }


let account = "abc";
let password = 123;

if (account==="abc"&&password===123){
    console.log("帳密OK")
}else if(account==="abc"&&password!==123){
    console.log("密碼err")
}else if(account!=="abc"&&passwaord===123){
    console.log("帳號err");
}else if(account!=="abc"&&passwaord!==123){
    console.log("帳密err");}