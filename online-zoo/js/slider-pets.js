const petsCarousel = document.querySelector('.slider-pets');
const petsContent = document.querySelector('.slider-pets__content');
const petNext = document.querySelector('.slider-pets__arrow_right');
const petPrev = document.querySelector('.slider-pets__arrow_left');

let petsCarouselWidth = petsCarousel.offsetWidth;
let petSlideWidth = petsContent.firstElementChild.offsetWidth;
let k = petsCarouselWidth/petSlideWidth;

petNext.addEventListener('click', (e) => {
  petsCarousel.classList.remove('not-transition');
  petsCarousel.style['transform'] = `translateX(-${petsCarouselWidth}px)`;
  setTimeout( addSlideNext, 500);
});

petPrev.addEventListener('click', (e) => {
  addSlidePrev()
  setTimeout(function() {
    petsCarousel.classList.remove('not-transition');
    petsCarousel.style['transform'] = `translateX(0px)`;
  }, 100)
});

window.addEventListener("resize", (e) => {
  petsCarouselWidth = petsCarousel.offsetWidth;
  petSlideWidth = petsContent.firstElementChild.offsetWidth;
  k = petsCarouselWidth/petSlideWidth;
});


function addSlideNext() {
  petsCarousel.classList.add('not-transition');
  petsCarousel.style['transform'] = 'translateX(0px)';
  for (let i = 0; i < k; i++){
    let item = petsContent.firstElementChild.cloneNode(true);
    petsContent.appendChild(item);
    petsContent.removeChild(petsContent.firstElementChild);
  }
}

function addSlidePrev() {
  for (let i = 0; i < k; i++){
    let item = petsContent.lastElementChild.cloneNode(true);
    petsContent.insertBefore(item, petsContent.firstElementChild);
    petsContent.removeChild(petsContent.lastElementChild);
  }
  petsCarousel.classList.add('not-transition');
  petsCarousel.style['transform'] = `translateX(-${petsCarouselWidth}px)`;
}
