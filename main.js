let cart = []; // Array to hold cart items

function addToCart(product) {
    // Add the product to the cart array
    cart.push(product);

    // Display a message that the item has been added to the cart
    const messageBox = document.getElementById('fardeen');
    const messageText = document.getElementById('waqas');
    messageText.textContent = product + ' has been added to your cart!';
    messageBox.style.display = 'block';

    // Hide the message after 3 seconds
    setTimeout(function() {
        messageBox.style.display = 'none';
    }, 3000);

    // Update the cart display
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('checkoutButton').style.display = 'none'; // Hide checkout button if the cart is empty
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item}</p>
                <button class="button" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        document.getElementById('checkoutButton').style.display = 'block'; // Show checkout button
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the given index
    updateCart(); // Update the cart display
}

function checkout() {
    alert('Proceeding to checkout with items: ' + cart.join(', '));
    // Redirect to checkout page or handle checkout logic
}
