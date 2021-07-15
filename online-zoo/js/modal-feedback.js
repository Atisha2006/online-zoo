const feedbackModalButton = document.querySelector('.btn_feedback');

feedbackModalButton.addEventListener('click',() => {
  document.body.classList.add('notScrollable');
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
})