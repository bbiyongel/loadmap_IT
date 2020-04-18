// js/web-main.js

const frontTitle = document.querySelector('.bg-left .frontTitle'),
  backTitle = document.querySelector('.bg-right .backTitle');

function init() {
  frontTitle.addEventListener('click', function(event) {
    location.href = "html/web/web-front.html";
  })
  backTitle.addEventListener('click', function(event) {
    location.href = "html/web/web-back.html";
  })
}

init();