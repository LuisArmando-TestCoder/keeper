let wrapper = document.getElementById('wrapper2');
let rotation = 360 * r(4, 1) / cuantity;
//rotation could be 360, 720, 1440, 2880, etc...
cuantity = 17;

for (let i = 0; i < cuantity; i++) {
  wrapper.innerHTML += '<div class="ovals"><div class="shape"></div></div>';
}

let ovals = document.getElementsByClassName('ovals');

for (let i = 0; i < cuantity; i++) {
  ovals[i].style.setProperty('transform', 'rotate(' + rotation * i + 'deg)');
}