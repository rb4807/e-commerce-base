const emiPaymentRadio = document.querySelector('input[value="emi"]');
const emiPaymentFields = document.getElementById('emi-payment-fields');

emiPaymentRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    emiPaymentFields.style.display = 'block';
  } else {
    emiPaymentFields.style.display = 'none';
  }
});
