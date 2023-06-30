const upiPaymentRadio = document.querySelector('input[value="upi"]');
const upiPaymentFields = document.getElementById('upi-payment-fields');

upiPaymentRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    upiPaymentFields.style.display = 'block';
  } else {
    upiPaymentFields.style.display = 'none';
  }
});
