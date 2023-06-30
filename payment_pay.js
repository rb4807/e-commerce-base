const payPaymentRadio = document.querySelector('input[value="pay"]');
const payPaymentFields = document.getElementById('pay-payment-fields');

payPaymentRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    payPaymentFields.style.display = 'block';
  } else {
    payPaymentFields.style.display = 'none';
  }
});
