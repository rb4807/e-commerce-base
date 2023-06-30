const paymentFormnet = document.getElementById('payment-form-net');

paymentFormnet.addEventListener('submit', (event) => {
  const paymentMethod = document.querySelector('input[name="payment-method-3"]:checked');
  if (!paymentMethod || paymentMethod.value !== 'net') {
    return;
  }
  const netIdInput = document.querySelector('input[name="net-id"]');
  if (!netIdInput || !netIdInput.value) {
    alert('Please enter a Username ID.');
    event.preventDefault();
    return;
  }
  const netIdyono = /^[\w-]+@[\w-]+\.[\w-]+$/;
  const isValidnetId = netIdyono.test(netIdInput.value);
  if (!isValidnetId) {
    alert('Please enter a valid Username.');
    event.preventDefault();
    return;
  }
});
