const h1 = document.querySelector('header h1');
const span = document.querySelector('header h1 span');

let weight = Math.floor(getComputedStyle(document.documentElement)
    .getPropertyValue('--weight'));
let weightInverted = Math.floor(getComputedStyle(document.documentElement)
    .getPropertyValue('--weightInverted'));

const htmlStyle = document.documentElement.style;

function changeWeight() {

    weight+=1;
    weightInverted-=1;

    if(weight > 900) weight = 200;
    if(weightInverted < 200) weightInverted = 900;

    htmlStyle.setProperty('--weight', weight);
    htmlStyle.setProperty('--weightInverted', weightInverted);
}
window.setInterval(changeWeight, 1);