function qs(param){
  return document.querySelector(param);
}
function qsa(param) {
  return document.querySelectorAll(param);
}
function gc(param) {
  return document.getElementsByClassName(param);
}
function gi(param) {
  return document.getElementById(param);
}
function r(min, max){
  return parseInt(Math.random()*((max+1)-min)+min);
}