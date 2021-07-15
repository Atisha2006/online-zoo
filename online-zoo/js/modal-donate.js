
// Modal
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal-donate');
const donateModalButton = document.querySelector('.btn_modal-donate');
const donateFormButton = document.querySelector('.modal-donate__button');

donateModalButton.addEventListener('click',() => {
  document.body.classList.add('notScrollable');
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
})

overlay.addEventListener('click',() => {
  document.body.classList.add('notScrollable');
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
})

donateFormButton.addEventListener('click',() => {
  document.body.classList.add('notScrollable');
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
})
