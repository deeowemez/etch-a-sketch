// script.js

do {
    inputNum = parseInt(prompt("Enter number of square divs in grid: "));
} while (inputNum > 100)

//initialize grid
const container = document.querySelector('.container');
for (let i = 0; i < (inputNum ** 2); i++) {
    const div = document.createElement('div');
    div.classList.add('cdiv');
    div.id = `idiv${i}`;
    container.appendChild(div);
}

//initialize dimensions
const size = ((1265 - (inputNum * 2)) / inputNum);
const padding = (size / 2);

// for (let i = 0; i < (inputNum ** 2); i++) {
//     const divElements = document.querySelectorAll(`#idiv${i}`);
//     console.log(divElements);
//     divElements.style.cssText = `max-width: ${size}px; max-height: ${size}px; border: 1px solid black; padding: ${padding}px`;
// }

// const divElements = document.querySelectorAll('#idiv');
const divElements = document.getElementsByClassName('cdiv');
console.log(divElements[0]);
// divElements[0].addEventListener('mouseover', hoverIn(0));

Array.from(divElements).forEach(div => {
    div.style.cssText = `box-sizing: border-box; max-width: ${size}px; max-height: ${size}px; border: 1px solid rgb(148,148,148); padding: ${padding}px`;
});

function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(`rgb(${red}, ${green}, ${blue})`);
    return `rgb(${red}, ${green}, ${blue})`;
}

function hoverIn(e){
    console.log(e.target.id)    
    const divElement = document.querySelector(`#${e.target.id}`);
    console.log(divElement)
    divElement.style.cssText = `box-sizing: border-box; max-width: ${size}px; max-height: ${size}px; padding: ${padding}px;
        border: 1px solid ${getRandomColor()} `;    
}

function hoverOut(e){    
    const divElement = document.querySelector(`#${e.target.id}`);
    console.log(divElement) 
    divElement.style.cssText = `box-sizing: border-box; max-width: ${size}px; max-height: ${size}px; border: 1px solid rgb(148,148,148); padding: ${padding}px;`;
}

//set hover in and hover out css elements for all grid boxes
const divIdElements = document.querySelectorAll('#idiv');
// const divClassElements = document.getElementsByClassName('cdiv');
for (let i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener('mouseover', hoverIn);
    divElements[i].addEventListener('mouseout', hoverOut);
}