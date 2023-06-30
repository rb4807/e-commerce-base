const paymentFormpay = document.getElementById('payment-form-pay');

paymentFormpay.addEventListener('submit', (event) => {
  const paymentMethod = document.querySelector('input[name="payment-method-6"]:checked');
  if (!paymentMethod || paymentMethod.value !== 'pay') {
    return;
  }
  const payIdInput = document.querySelector('input[name="pay-id"]');
  if (!payIdInput || !payIdInput.value) {
    alert('Please enter your password.');
    event.preventDefault();
    return;
  }
  const payIdlater = /^[\w-]+@[\w-]+\.[\w-]+$/;
  const isValidpayId = payIdlater.test(payIdInput.value);
  if (!isValidpayId) {
    alert('Please enter your Correct password.');
    event.preventDefault();
    return;
  }
});
