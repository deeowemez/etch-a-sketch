// script.js

const container = document.querySelector('#container');
inputNum = parseInt(prompt("Enter number of square divs in grid: "));

for (let i = 0; i < (inputNum ** 2); i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    container.appendChild(div);
}

const size = 1920 / inputNum;
const padding = (1920 / inputNum - 1) / 2;

const divElements = document.querySelectorAll('.div');
divElements.forEach(div => {
    div.style.cssText = `max-width: ${size}px; max-height: ${size}px; border: 1px solid black; padding: ${padding}px`;
});
