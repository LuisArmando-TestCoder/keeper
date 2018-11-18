//Creado por LuisArmando-TestCoder

let cat = document.querySelector('.cat'),
    buildings = document.querySelector('.buildings'),
    buildingsB = document.querySelector('.buildingsB'),
    buildingsC = document.querySelector('.buildingsC'),
    audio = document.querySelector('audio');

let leftDistance = 0,
    buildingsDistance = 50,
    buildingsBDistance = 70,
    buildingsCDistance = 40; 

function keypress(e){
  audio.volume = 0.3;
  if(e.key == 'D' || e.key == 'd'){
    // d key
    leftDistance += 1;
    cat.style.setProperty('animation','walk 0.8s step-end infinite');
    cat.style.setProperty('transform','rotateY(0deg)');
    cat.style.setProperty('width','20px');
    cat.style.setProperty('left',leftDistance + 'px'); 
    if(leftDistance < 200){
      cat.style.setProperty('left',leftDistance + 'px');
    } else{
      audio.play();
      leftDistance = 200;
      buildingsDistance -= 0.02;
      buildings.style.setProperty('left',buildingsDistance + 'vw');
      buildingsBDistance -= 0.04;
      buildingsB.style.setProperty('left',buildingsBDistance + 'vw');
      buildingsCDistance -= 0.1;
      buildingsC.style.setProperty('left',buildingsCDistance + 'vw');
      buildingsPosition();
    }
  }else if(e.key == 'A' || e.key == 'a'){
    // a key
    leftDistance -= 1;
    cat.style.setProperty('width','20px');
    cat.style.setProperty('animation','walk 0.8s step-end infinite');
    cat.style.setProperty('transform','rotateY(180deg)');
    if(leftDistance > 0){
      cat.style.setProperty('left',leftDistance + 'px');
    } else{
      audio.play();
      buildingsDistance += 0.02;
      buildings.style.setProperty('left',buildingsDistance + 'vw');
      buildingsBDistance += 0.04;
      buildingsB.style.setProperty('left',buildingsBDistance + 'vw');
      buildingsCDistance += 0.1;
      buildingsC.style.setProperty('left',buildingsCDistance + 'vw');
      leftDistance = 0;
      buildingsPosition();
    }
  }else if(e.key == 'E' || e.key == 'e'){
    
    cat.style.setProperty('animation','uppercut 0.5s step-end infinite');
    cat.style.setProperty('width','30px');
  }else if(e.key == 'R' || e.key == 'r'){
    
    cat.style.setProperty('animation','oneTwoCombo 0.5s step-end infinite');
    cat.style.setProperty('width','30px');
  }else if(e.key == 'F' || e.key == 'f'){
    
    cat.style.setProperty('animation','highKick 0.5s step-end infinite');
   
    cat.style.setProperty('width','30px');
  }
  console.clear();
  console.log('position: ' + parseInt(buildingsCDistance));
}

function keyup(e){
  audio.pause();
  cat.style.setProperty('animation','stand 0.8s step-end infinite');
  cat.style.setProperty('width','20px');
}

function buildingsPosition(){
  if(buildingsDistance > 100) buildingsDistance = -16;
  if(buildingsDistance < -16) buildingsDistance = 100;
  if(buildingsBDistance > 100) buildingsBDistance = -16;
  if(buildingsBDistance < -16) buildingsBDistance = 100;
  if(buildingsCDistance > 100) buildingsCDistance = -16;
  if(buildingsCDistance < -16) buildingsCDistance = 100;
}

window.addEventListener('keypress', keypress);
window.addEventListener('keyup', keyup);