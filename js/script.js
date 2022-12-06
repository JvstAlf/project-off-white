const title = document.getElementById('title1')
const main = document.getElementById('main')
const subtitle = document.getElementById('subtitle')
const arrowDown = document.getElementById('arrow-down')
const navbar = document.getElementById('navbar')
const clickMe = document.getElementById('click-me')

function title1() {
    main.style.transition = "1s ease-in-out";
    main.style.transform = "translateY(-100%)";
	subtitle.style.transform = "translateY(-2rem)";
	subtitle.style.opacity = "0"
	arrowDown.style.opacity = "0";
	arrowDown.style.scale = "0%";
  document.getElementsByTagName('html')[0].style.overflow = "auto"
	setTimeout(() => {
	main.style.display = "none"
}, 1000);
}

title.addEventListener('mouseover', function(){
	arrowDown.style.transition = "0.5s ease-in-out";
	arrowDown.style.opacity = "100";
	arrowDown.style.scale = "100%"
	arrowDown.style.top = "92%";
})

title.addEventListener('mouseleave', function(){
	arrowDown.style.transition = '0.5s ease-in-out';
	arrowDown.style.opacity = "0";
	arrowDown.style.scale = "0%";
	arrowDown.style.top = "90%";
})

setTimeout(() => {
	title.addEventListener('mouseover', function(){
		subtitle.style.transition = "1s ease-in-out";
		subtitle.style.transform = "translateY(1rem)";
	})
	title.addEventListener('mouseleave', function(){
		subtitle.style.transition = "1s ease-in-out";
	    subtitle.style.transform = "translateY(0)";
	})
}, 2000);


// TOP PROGRESS BAR

const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('section');
const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + '%';
}

window.addEventListener('scroll', animateProgressBar);

const section1 = document.getElementById('section')

// FADE

function fade() {
    section1.style.transition = "1s"
	  section1.style.opacity = "100"
    progressBar1.style.opacity = "0"
    document.body.style.overflow = "scroll"
    document.body.style.overflowX = "hidden"
    document.getElementById('navbar').style.pointerEvents = "auto"
    document.getElementById('navbar').style.opacity = "100"
    document.getElementById('home').style.opacity = "100"
}

setTimeout(() => fade(), 500);

// elements
var elements_to_watch = document.querySelectorAll('.watch');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});

// RESET SCROLL

history.scrollRestoration = "manual";

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

function toSection1() {
  document.getElementById('toSection1').scrollIntoView({ behavior: 'smooth', block: 'center' });

}

function toSection2() {
  document.getElementById('toSection2').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function toSection3() {
  document.getElementById('toSection3').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

window.addEventListener('load', function(){
  navbar.style.transform = "translateY(-5rem)"
  clickMe.style.opacity = "0"
})

document.addEventListener('scroll', function(){
  console.log(window.scrollY)
  if(window.scrollY >= 800) {
    navbar.style.transform = "translate(0)"
  } else {
    navbar.style.transform = "translateY(-5rem)"
  }
})

////////////////////////  CLICK ME APPEAR ////////////////////////

function notPressed() {
  clickMe.style.transition = "0.5s ease-in-out"
  clickMe.style.opacity = "100"
}

function Pressed() {
  clearTimeout(timer)
}

var timer = window.setTimeout(notPressed, 6000)