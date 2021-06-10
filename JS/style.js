let slide_container = document.querySelector('.slider_container');
let slide = document.querySelectorAll('.slider_container .slide');
let count = 0;

setInterval(function(){
  slide_container.style.left = -count * 1200 + "px";
  if(count===3){
    slide_container.style.left = 0 + "px";
    count=-1;
  }
  count++;
},4000);