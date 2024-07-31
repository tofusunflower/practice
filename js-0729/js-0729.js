// let myjs = document.getElementById('js');
// console.log(typeof myjs);
// console.log(myjs.textContent);
// 根據querySelector
// console.log(document.querySelector('#js').textContent);

// 根據html標籤
// let myLi=document.getElementsByTagName('li');
// console.log(myLi);

// 取出css
// console.log(myLi.item(1).textContent);
// console.log(myLi[1].textContent);

// 顯示所有的i
// for(let i=0;i<myLi.length;i++){
    // console.log(myLi.item.textContent);
// }

// console.log('---querySelector---')
// console.log(document.querySelector('h1').textContent);

// console.log('---getElementsByTagName---')
// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementsByTagName('h1')[0].textContent);
// console.log(document.getElementsByTagName('h1').item(0).textContent);


// 使用類別名稱
let mySubjects = document.getElementsByClassName('subject')
console.log(mySubjects);
for(let i=0; i<mySubjects.length;i++){
    console.log(mySubjects.item(i).textContent);
    console.log(mySubjects[i].textContent);
}

// 顯示指定的內容(必須有id)=>html
console.log(mySubjects['html'].textContent);

// 取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li中的第一個段落p
let p =document.querySelectorAll('li>p');
console.log(p);
console.log(p[0].textContent);


// 取得li的紫園速中的div下的p
let divp =document.querySelectorAll('li>div>p');
console.log(divp.textContent);