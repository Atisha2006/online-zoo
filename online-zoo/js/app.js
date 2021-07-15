// Burger
const nav = document.querySelector('.nav');
const toggleNav = function() {
  nav.classList.toggle('active');
}
document.querySelector('.nav__burger').addEventListener('click', function(e) {
  toggleNav();
});
document.addEventListener('click', function(e) {
  if (!nav.contains(e.target) && nav.classList.contains('active')) {
    toggleNav();
  }
});
