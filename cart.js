let cartItems = []; // Array to hold cart items

// Function to add item to cart
function addToCart(name, price) {
    cartItems.push({ name, price }); // Add product object to cart
    updateCart(); // Update the cart display
}

// Function to update the cart display
function updateCart() {
    const cartItemAppend = document.querySelector('.cart_item_append');
    cartItemAppend.innerHTML = ''; // Clear existing items

    let totalPrice = 0; // Reset total price
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart_item';
        cartItemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: Rs.${item.price.toFixed(2)}</p> <!-- Format price to 2 decimal places -->
        `;
        cartItemAppend.appendChild(cartItemDiv);
        totalPrice += item.price; // Update total price
    });

    // Update total price in the cart
    document.getElementById('total_price').innerText = `Rs. ${totalPrice.toFixed(2)}`; // Format total price
    document.getElementById('checkout_cost').innerText = `Total Cost: Rs. ${totalPrice.toFixed(2)}`; // Format total cost
    document.getElementById("rzp-button1").disabled = totalPrice <= 0; // Enable/disable checkout button
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, productPrice);
        document.querySelector('.cart-notification-container').classList.remove('cart-dismiss'); // Show the cart
    });
});
