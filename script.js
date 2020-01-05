'use strict';

const ulElement = document.querySelector('ul');
const countString = document.querySelector('#countLi');
let countStr = Number(countString.value);
console.log(countStr);
document.getElementById('genCountLiBtn').addEventListener('click', genCountLi);
 

function genCountLi() {

    genOneLi();

console.log(countStr);
 
}

function genOneLi() {

ulElement.innerHTML = "<li>sadfas</li>";

}


