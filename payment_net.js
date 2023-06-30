const netPaymentRadio = document.querySelector('input[value="net"]');
const netPaymentFields = document.getElementById('net-payment-fields');

netPaymentRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    netPaymentFields.style.display = 'block';
  } else {
    netPaymentFields.style.display = 'none';
  }
});
