const readMore = document.querySelector('.btn_more-info');
const fullText = document.querySelector('.animal-info__full');

readMore.addEventListener('click', function(event) {
  readMore.classList.toggle('show');
  fullText.classList.toggle('show');
  if ( !fullText.classList.contains('show')){
    fullText.style.maxHeight = 24 + 'em'; 
    window.scrollTo({
      top: fullText.offsetTop,
      behavior: 'smooth'
    })
  }
  else { fullText.style.maxHeight = fullText.scrollHeight + 62 + 'px'; }
});

