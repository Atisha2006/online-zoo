const donateInputAmount = document.querySelector('.donate__input_amount');
const donateRadioButtons = document.querySelectorAll('.donate__radio-btn');

donateRadioButtons.forEach((input) => input.addEventListener('click', (event) => {
  donateInputAmount.value = event.target.getAttribute('value');
}));

donateInputAmount.addEventListener('input', function(e) {
  const valAmount = e.target.value;
  if (valAmount && document.getElementById(valAmount)) {
    document.getElementById(valAmount).checked = true;
  } else {
    donateRadioButtons.forEach((input) => {
      input.checked = false;
    })
  }
});