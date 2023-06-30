const paymentFormcod = document.getElementById('payment-form-cod');

paymentFormcod.addEventListener('submit', (event) => {
  const paymentMethod = document.querySelector('input[name="payment-method-2"]:checked');
  if (!paymentMethod || paymentMethod.value !== 'cod') {
    return;

  }
});
