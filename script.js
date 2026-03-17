"use strict"
let tarea = document.querySelector('#box');
let counter = document.querySelector('#counter');
tarea.addEventListener('input', ()=> {
    let length = tarea.value.length;
    if(length <= 249){
        counter.innerHTML = `${length} / 250`;
        document.querySelector('#box').classList.remove('maxed');
    }
    else{
        counter.innerHTML = `${length} / 250`;
        document.querySelector('#box').classList.add('maxed');
    }
})