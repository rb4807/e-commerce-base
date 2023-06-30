const paymentFormupi = document.getElementById('payment-form-upi');

paymentFormupi.addEventListener('submit', (event) => {
  const paymentMethod = document.querySelector('input[name="payment-method-4"]:checked');
  if (!paymentMethod || paymentMethod.value !== 'upi') {
    return;
  }
  const upiIdInput = document.querySelector('input[name="upi-id"]');
  if (!upiIdInput || !upiIdInput.value) {
    alert('Please enter a UPI ID.');
    event.preventDefault();
    return;
  }
  const upiIdRegex = /^[\w-]+@[\w-]+\.[\w-]+$/;
  const isValidUpiId = upiIdRegex.test(upiIdInput.value);
  if (!isValidUpiId) {
    alert('Please enter a valid UPI ID.');
    event.preventDefault();
    return;
  }
});
