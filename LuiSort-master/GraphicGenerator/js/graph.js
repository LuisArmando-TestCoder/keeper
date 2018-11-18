// NFR stands for (not for request)
let manyRequests = []; // to get each request
let response;
let count = true;
let nameValueObjectsArray = [];

function sendJsonRequest(url) {
  let request = new XMLHttpRequest()
  request.responseType = 'json';
  request.open('GET', url);
  request.addEventListener('load', jsonLoaded);
  request.send();
}

function jsonLoaded(e) {
  response = e.target.response; // console.log(response);

  manyRequests.push(response); // console.log(manyRequests);

  if (!count) { // NFR
    graphGenerator();
  }else{
    count = !count;
  }
}

sendJsonRequest('../data/cardsArray.json');
sendJsonRequest('../data/participantes.json');

function graphGenerator() { // Graph generator
  const maxHrWidth = 54.76; // measure in vw
  let ul = document.getElementById('graph'); // NFR
  for (const i of manyRequests[0]) { // NFR
    // console.log(i);
    ul.innerHTML += `<li>${i}<hr/></li>`;
  }
  let hr = ul.querySelectorAll('li hr'); // console.log(hr);
  manyRequests[0].forEach(primaryElem => { // console.log(manyRequests[0])
    // console.log(primaryElem);
    let nameValue = primaryElem.length;
    nameValueObjectsArray.push({
      name: primaryElem,
      value: parseInt(nameValue * 0.1)
    });
  });

  let theCounter = 0;
  for(const i of hr){
    theCounter++;
    i.style.setProperty('width', `${maxHrWidth * nameValueObjectsArray[theCounter-1].value / 10 + 5}vw`);
    console.log('width', `${maxHrWidth * nameValueObjectsArray[theCounter-1].value / 10 + 5}vw`)
  }
}
