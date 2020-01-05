'use strict';

const ulElement = document.querySelector('ul');
const warningMessage = document.querySelector('#warningMessage');

document.getElementById('genCountLiBtn').addEventListener('click', genCountLi);

function genCountLi() {
    let countString = document.querySelector('#countLi').value;
    countString = Number(countString);
    clear();
    for(let i=1; i<countString+1; i++) {
        genOneLi(i);      
    }

    if(countString<=0 || isNaN(countString) ) {
        console.log('Not a Number');
    }
}

function genOneLi(numberString) {
 return ulElement.innerHTML += `<li>номер строки №${numberString}</li>`;
}

function clear() {
    ulElement.innerText = '';
    document.querySelector('#countLi').value = '';
}

