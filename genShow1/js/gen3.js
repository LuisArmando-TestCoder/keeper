let wrapper = document.getElementById('wrapper3');
let rotation = 360*8 / cuantity;
//rotation could be 360, 720, 1440, 2880, etc...

for(let i = 0; i < cuantity; i++){
	wrapper.innerHTML += '<div class="ovals"></div></div>';
}

let ovals = document.getElementsByClassName('ovals');

for(let i = 0; i < cuantity; i++){
	ovals[i].style.setProperty('transform','rotate('+rotation*i+'deg)');
}