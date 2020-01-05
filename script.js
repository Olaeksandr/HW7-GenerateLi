'use strict';

const ulElement = document.querySelector('ul');
const countString = document.querySelector('#countLi');


document.getElementById('genCountLiBtn').addEventListener('click', genCountLi);
 

function genCountLi() {
    let countStr = document.querySelector('#countLi').value;
    countStr = Number(countStr);
    clear();
    for(let i=0; i< countStr; i++) {
        genOneLi(i);      
    }
}

function genOneLi(numberString) {
 return ulElement.innerHTML += `<li>номер строки №${numberString}</li>`;
}

function clear() {
    ulElement.innerText = '';
    document.querySelector('#countLi').value = '';
}