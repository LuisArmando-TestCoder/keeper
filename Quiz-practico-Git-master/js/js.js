let a = true;
let boton = document.getElementsByClassName('boton');
let form = document.getElementsByClassName('form');
let description = document.getElementsByClassName('description');

form[0].style.display = 'none';
description[0].style.display = 'block';

boton[0].onclick = function(){
    a = false;
    if(a == false){
        boton[1].setAttribute('class','boton b2');
        boton[0].setAttribute('class','boton b1');
        form[0].style.display = 'none';
        description[0].style.display = 'block';
    }
}
boton[1].onclick = function(){
    a = true;
    if(a == true){
        boton[1].setAttribute('class','boton b1');
        boton[0].setAttribute('class','boton b2');
        form[0].style.display = 'block';
        description[0].style.display = 'none';
    }
}