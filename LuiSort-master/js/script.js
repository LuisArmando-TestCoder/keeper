/**
 * Making a better version of xSort for me
 */
//DOM
let sortingUl = document.getElementById('sorting'); //to get li later
const buttonCurrentCard = document.getElementById('currentCard');

let jsonContent; //json array
let currentCardInnerHTML,
    sortingLi;
let verifier = false;
let currrentCardCount = 0;
let cardsArray = [], count = -1, liInitialAmount = 20;

for(let i = 0; i < liInitialAmount; i++){
  count++;
  sortingUl.innerHTML += `<li data-number="${count}"></li>`;
}
for(let i of sortingUl.children){
  cardsArray.push([]);
}

const cardsArrayJson = new XMLHttpRequest();

function getFinalArray(index, cardText){
  cardsArray[index].push(cardText);
  console.clear();
  console.log(cardsArray);
}

function getColumns() {
  return sortingUl.children;
}

function jsonLoaded(e) {
  jsonContent = e.target.response;
  currentCard.innerText = jsonContent[0];
  buttonCurrentCard.addEventListener('click', () => {
    currrentCardCount++;
    currentCardInnerHTML = buttonCurrentCard.innerText;
    verifier = true;
    for (let i of getColumns()) {
      i.addEventListener('click', () => {
        if (verifier) {
          i.innerHTML += `<button class="card">${currentCardInnerHTML}</button>`;
          buttonCurrentCard.innerText = jsonContent[currrentCardCount];
          verifier = false;
          getFinalArray(i.getAttribute('data-number'), currentCardInnerHTML);
        }
      });
    }
  });
}

cardsArrayJson.addEventListener('load', jsonLoaded);
cardsArrayJson.responseType = 'json';
cardsArrayJson.open('GET', '../data/cardsArray.json');
cardsArrayJson.send();
