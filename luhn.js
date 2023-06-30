const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (event) => {
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
  if (!paymentMethod || paymentMethod.value !== 'card') {
    return;
  }
  const cardNumberInput = document.querySelector('input[name="card-number"]');
  if (!cardNumberInput || !cardNumberInput.value) {
    alert('Please enter a card number.');
    event.preventDefault();
    return;
  }
  const isValidCardNumber = Luhn.validate(cardNumberInput.value);
  if (!isValidCardNumber) {
    alert('Please enter a valid card number.');
    event.preventDefault();
    return;
  }
});
