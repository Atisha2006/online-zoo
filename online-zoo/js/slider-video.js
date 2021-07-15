const videoCarousel = document.querySelector('.carusel');
const videoContent = document.querySelector('.carusel__content');
const videoNext = document.querySelector('.carusel__arrow_right');
const videoPrev = document.querySelector('.carusel__arrow_left');
const mainVideo = document.querySelector('.main-video');
const videoSlides = document.querySelectorAll('.carusel__item');
const videoSlidesLength = videoSlides.length;

let carouselWidth = videoContent.offsetWidth;
let slideWidth = videoContent.firstElementChild.offsetWidth;
let k = Math.round(carouselWidth/slideWidth);

videoSlides.forEach((item) => item.addEventListener('click', (event) => {
  let urlVideo = event.target.firstElementChild.src;
  event.target.firstElementChild.src = mainVideo.src;
  mainVideo.src = urlVideo;
}));

let activeSlide = 0;
videoNext.addEventListener('click', (e) => {
  if (activeSlide < videoSlidesLength - k){
    activeSlide++; 
    videoCarousel.style['transform'] = `translateX(-${slideWidth*activeSlide}px)`;
  }
});

videoPrev.addEventListener('click', (e) => {
  if (activeSlide > 0){
    activeSlide--; 
    videoCarousel.style['transform'] = `translateX(-${slideWidth*activeSlide}px)`;
  }
});

window.addEventListener("resize", () => {
  carouselWidth = videoContent.offsetWidth;
  slideWidth = videoContent.firstElementChild.offsetWidth;
  k = Math.round(carouselWidth/slideWidth);
  videoCarousel.style['transform'] = 'translateX(0px)';
  activeSlide = 0;
});