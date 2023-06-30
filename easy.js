const paymentFormemi = document.getElementById('payment-form-emi');

paymentFormemi.addEventListener('submit', (event) => {
  const paymentMethod = document.querySelector('input[name="payment-method-5"]:checked');
  if (!paymentMethod || paymentMethod.value !== 'emi') {
    return;
  }
  const emiIdInput = document.querySelector('input[name="emi-id"]');
  if (!emiIdInput || !emiIdInput.value) {
    alert('Please enter a EMI card number.');
    event.preventDefault();
    return;
  }
  const emiIdeasy = /^[\w-]+@[\w-]+\.[\w-]+$/;
  const isValidemiId = emiIdeasy.test(emiIdInput.value);
  if (!isValidemiId) {
    alert('Please enter a valid card number.');
    event.preventDefault();
    return;
  }
});
