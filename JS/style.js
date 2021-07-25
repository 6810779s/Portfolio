let slide_container = document.querySelector('#profile .slider_container');
let count = 0;

// setInterval(function () {
//   slide_container.style.left = -count * 1200 + "px";
//   if (count === 3) {
//     slide_container.style.left = 0 + "px";
//     count = -1;
//   }
//   count++;
// }, 2500);

let slide_container2 = document.querySelector('#profile2 .slider_container');
let count2 = 0;
setInterval(function () {
  slide_container2.style.left = -count2 * 800 + "px";
  if (count2 === 3) {
    slide_container2.style.left = 0 + "px";
    count2 = -1;
  }
  count2++;
}, 2500);

document.addEventListener('scroll', function () {
  const java_box = document.querySelector('.skill_container2 .java_box');
  const html_box = document.querySelector('.skill_container2 .html_box');
  const css_box = document.querySelector('.skill_container2 .css_box');
  const c_box = document.querySelector('.skill_container2 .c_box');
  const python_box = document.querySelector('.skill_container2 .python_box');
  const JS_box = document.querySelector('.skill_container2 .JS_box');
  const mySQL_box = document.querySelector('.skill_container2 .mySQL_box');
  const Android_box = document.querySelector('.skill_container2 .Android_box');
  
  let currentScrollValue = document.documentElement.scrollTop;
  console.log(currentScrollValue);
  if (currentScrollValue >= 1250) {
    java_box.style.animation= "box1 2s 0.5s forwards";
    html_box.style.animation = "box2 2s 0.5s forwards";
    css_box.style.animation = "box3 2s 0.5s forwards";
    c_box.style.animation = "box4 2s 0.5s forwards";
    python_box.style.animation = "box5 2s 0.5s forwards";
    JS_box.style.animation = "box6 2s 0.5s forwards";
    mySQL_box.style.animation = "box7 2s 0.5s forwards";
    Android_box.style.animation = "box8 2s 0.5s forwards";
  } 


  // if (currentScrollValue >= 1300) {
  //   java_box.style.animationPlayState = "running";
  //   html_box.style.animationPlayState = "running";
  //   css_box.style.animationPlayState = "running";
  //   c_box.style.animationPlayState = "running";
  //   python_box.style.animationPlayState = "running";
  //   JS_box.style.animationPlayState = "running";
  //   mySQL_box.style.animationPlayState = "running";
  //   html_box.style.animationPlayState = "running";
  //   Android_box.style.animationPlayState = "running";
  // } else {

  //   java_box.style.animationPlayState = "paused";
  //   html_box.style.animationPlayState = "paused";
  //   css_box.style.animationPlayState = "paused";
  //   c_box.style.animationPlayState = "paused";
  //   python_box.style.animationPlayState = "paused";
  //   JS_box.style.animationPlayState = "paused";
  //   mySQL_box.style.animationPlayState = "paused";
  //   html_box.style.animationPlayState = "paused";
  //   Android_box.style.animationPlayState = "paused";
  // }
});

document.addEventListener('scroll', function () {
  const java_box = document.querySelector('.skill_container3 .java_box');
  const html_box = document.querySelector('.skill_container3 .html_box');
  const css_box = document.querySelector('.skill_container3 .css_box');
  const c_box = document.querySelector('.skill_container3 .c_box');
  const python_box = document.querySelector('.skill_container3 .python_box');
  const JS_box = document.querySelector('.skill_container3 .JS_box');
  const mySQL_box = document.querySelector('.skill_container3 .mySQL_box');
  const Android_box = document.querySelector('.skill_container3 .Android_box');
  
  let currentScrollValue = document.documentElement.scrollTop;
  console.log(currentScrollValue);
  if (currentScrollValue >= 938) {
    java_box.style.animation= "box9 2s 0s forwards";
    html_box.style.animation = "box10 2s 0s forwards";
    css_box.style.animation = "box11 2s 0s forwards";
    c_box.style.animation = "box12 2s 0s forwards";
    python_box.style.animation = "box13 2s 0s forwards";
    JS_box.style.animation = "box14 2s 0s forwards";
    mySQL_box.style.animation = "box15 2s 0s forwards";
    Android_box.style.animation = "box16 2s 0s forwards";
  } 

});


let hamburger = document.querySelector('#hidden_menu .hamburger');
let hiddenMenu = document.querySelector('#hidden_menu .hiddenMenu');
let btn = 0;
hamburger.addEventListener('click',function(){
  if(btn===0){
    hiddenMenu.style.display = "block";
    btn=1;
  }else{
    hiddenMenu.style.display = "none";
    btn=0;
  }
  
});

document.addEventListener('scroll',function(){
  hiddenMenu.style.display = "none";
  btn=0;
});


AOS.init({
  easing: 'ease-out-back',
  duration: 3000
});;

