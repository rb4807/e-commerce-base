// Assuming you have an array called "cart" to store the items in the cart
const cart = [];

// Select the "Add to Cart" button
const addToCartBtn = document.querySelector('add-to-cart-button');

// Add a click event listener to the button
addToCartBtn.addEventListener('click', () => {
  // Get the product details
  const productName = document.querySelector('#product-name').textContent;
  const productPrice = document.querySelector('#product-price').textContent;

  // Create an object to store the product details
  const product = {
    name: productName,
    price: productPrice,
    quantity: 1
  };

  // Add the product to the cart array
  cart.push(product);

  // Optional: Display a success message to the user
  alert('Item added to cart successfully!');
});
