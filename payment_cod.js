const codPaymentRadio = document.querySelector('input[value="cod"]');
const codPaymentFields = document.getElementById('cod-payment-fields');

codPaymentRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    codPaymentFields.style.display = 'block';
  } else {
    codPaymentFields.style.display = 'none';
  }
});
