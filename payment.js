const cardPaymentRadio = document.querySelector('input[value="card"]');
const cardPaymentFields = document.getElementById('card-payment-fields');

cardPaymentRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    cardPaymentFields.style.display = 'block';
  } else {
    cardPaymentFields.style.display = 'none';
  }
});
