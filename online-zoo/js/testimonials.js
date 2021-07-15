const carousel = document.querySelector('.slider-testimonials');
const content = document.querySelector('.slider-testimonials__content');
const next = document.querySelector('.slider-pets__arrow_right');
const prev = document.querySelector('.slider-pets__arrow_left');
const caruselSlides = document.querySelectorAll('.slider-testimonials__item-wrap');
const rangeInput = document.querySelector('.range__input');

const caruselLength = caruselSlides.length;

let carouselWidth = content.offsetWidth;
let slideWidth = parseFloat(getComputedStyle(caruselSlides[0]).width);
let activeSlide = 0;

const nextSlide = () => {
  if (activeSlide < 7){
    activeSlide++; 
  } else { 
    activeSlide = 0;
  }
  rangeInput.value = activeSlide;
  carousel.style['transform'] = `translateX(-${slideWidth*activeSlide}px)`;
};

let windowWidth = document.documentElement.clientWidth;
let isInitCarousel = false;
let autoScroll, pauseScroll;
const timeScroll = 10000;

const initCarousel = () => {
  let blockPosition = carousel.getBoundingClientRect().top;
  let windowHeight = document.documentElement.clientHeight;
  if( blockPosition > windowHeight) {
    window.addEventListener('scroll', initAutoScroll);
    isInitCarousel = true;
  } else {
    autoScroll = setInterval(() => nextSlide(), timeScroll);
    isInitCarousel = true;
  }
};

function initAutoScroll(){
  let blockPosition = carousel.getBoundingClientRect().top;
  let windowHeight = document.documentElement.clientHeight;
  if( blockPosition < windowHeight) {
    autoScroll = setInterval(() => nextSlide(), timeScroll);
    window.removeEventListener('scroll', initAutoScroll);
  }
}

window.addEventListener("resize", (e) => {
  windowWidth = document.documentElement.clientWidth;
  if(windowWidth >= 1000){
    if(isInitCarousel){
      carouselWidth = content.offsetWidth;
      slideWidth = parseFloat(getComputedStyle(caruselSlides[0]).width);
      carousel.style['transform'] = `translateX(-${slideWidth*activeSlide}px)`;
    } else {
      initCarousel();
    }
  }
  else{
    clearInterval(autoScroll);
    isInitCarousel = false;
    activeSlide = 0;
    rangeInput.value = 0;
    carousel.style['transform'] = `translateX(0px)`;
  }
});

if(windowWidth >= 1000){
  initCarousel();
}

caruselSlides.forEach((item) => item.addEventListener('mousedown', (event) => {
  if(isInitCarousel){
    clearInterval(autoScroll);
    clearTimeout(pauseScroll);
    pauseScroll = setTimeout(function() {
      autoScroll = setInterval(() => nextSlide(), timeScroll);
    }, 30000);
  }
}));

rangeInput.addEventListener('input', (event) => {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => nextSlide(), timeScroll);
  let val = event.target.value;
  activeSlide = val-1;
  nextSlide();
});

