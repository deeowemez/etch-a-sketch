// script.js

function buttonClick(){
    do {
        inputNum = parseInt(prompt("Enter number of square divs in grid: "));
    } while (inputNum > 100);
    return inputNum;
}

function generateDiv(inputNum){
    const container = document.querySelector('.container');
    for (let i = 0; i < (inputNum ** 2); i++) {
        const div = document.createElement('div');
        div.classList.add('cdiv');
        div.id = `idiv${i}`;
        container.appendChild(div);
    }
}

function generateGrid(divElements, size, padding){
    Array.from(divElements).forEach(div => {
        div.style.cssText = `box-sizing: border-box; max-width: ${size}px; max-height: ${size}px; border: 5px solid rgb(148,148,148); padding: ${padding}px`;
    });
}

function divEventListener(divElements, size, padding){
    for (let i = 0; i < divElements.length; i++) {
        divElements[i].addEventListener('mouseover', (e) => hoverIn(e, size, padding));
        divElements[i].addEventListener('mouseout', (e) => hoverOut(e, size, padding));
    }
}

function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`rgb(${red}, ${green}, ${blue})`);
    return `rgb(${red}, ${green}, ${blue})`;
}


function hoverIn(e, size, padding){
    console.log(e.target.id)    
    const divElement = document.querySelector(`#${e.target.id}`);
    console.log(divElement)
    divElement.style.cssText = `box-sizing: border-box; max-width: ${size}px; max-height: ${size}px; padding: ${padding}px;
        border: 5px solid ${getRandomColor()} `;    
}

function hoverOut(e, size, padding){    
    const divElement = document.querySelector(`#${e.target.id}`);
    console.log(divElement) 
    divElement.style.cssText = `box-sizing: border-box; max-width: ${size}px; max-height: ${size}px; border: 5px solid rgb(148,148,148); padding: ${padding}px;`;
}

function newGrid(){
    const inputNum = buttonClick();
    const size = ((1265 - (inputNum * 5)) / inputNum); 
    const padding = (size / 2);
    generateDiv(inputNum);
    const divElements = document.getElementsByClassName('cdiv');
    generateGrid(divElements, size, padding);
    divEventListener(divElements, size, padding);
}

const btn = document.querySelector('#btn');
btn.onclick = () => newGrid();