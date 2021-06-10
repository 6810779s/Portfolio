let slide_container = document.querySelector('#profile .slider_container');
let count = 0;

setInterval(function(){
  slide_container.style.left = -count * 1200 + "px";
  if(count===3){
    slide_container.style.left = 0 + "px";
    count=-1;
  }
  count++;
},4000);

let slide_container2 = document.querySelector('#profile2 .slider_container');
let count2=0;
setInterval(function(){
  slide_container2.style.left = -count2 * 800 + "px";
  if(count2===3){
    slide_container2.style.left = 0 + "px";
    count2=-1;
  }
  count2++;
},4000);

document.addEventListener('scroll', function(){
  let java_box = document.querySelector('.skill_container2 .java_box');
  let html_box = document.querySelector('.skill_container2 .html_box');
  let css_box = document.querySelector('.skill_container2 .css_box');
  let c_box = document.querySelector('.skill_container2 .c_box');
  let python_box = document.querySelector('.skill_container2 .python_box');
  let JS_box = document.querySelector('.skill_container2 .JS_box');
  let mySQL_box = document.querySelector('.skill_container2 .mySQL_box');
  let Android_box = document.querySelector('.skill_container2 .Android_box');

  let currentScrollValue = document.documentElement.scrollTop;

  if (currentScrollValue>=1000){
 
    java_box.style.animationPlayState = "running";
    html_box.style.animationPlayState = "running";
    css_box.style.animationPlayState = "running";
    c_box.style.animationPlayState = "running";
    python_box.style.animationPlayState = "running";
    JS_box.style.animationPlayState = "running";
    mySQL_box.style.animationPlayState = "running";
    html_box.style.animationPlayState = "running";
    Android_box.style.animationPlayState = "running";
  }else{

    java_box.style.animationPlayState = "paused";
    html_box.style.animationPlayState = "paused";
    css_box.style.animationPlayState = "paused";
    c_box.style.animationPlayState = "paused";
    python_box.style.animationPlayState = "paused";
    JS_box.style.animationPlayState = "paused";
    mySQL_box.style.animationPlayState = "paused";
    html_box.style.animationPlayState = "paused";
    Android_box.style.animationPlayState = "paused";
  }
});



AOS.init({
  easing:'ease-out-back',
  duration: 3000
});;

