/* checkout page  */

document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

function displayCartItems() {
    const cartData = JSON.parse(sessionStorage.getItem('cartData'));

    if (cartData && cartData.cartItems.length > 0) {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartData.cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price}</div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        const cartTotalElement = document.querySelector('.cart-total');
        cartTotalElement.innerText = `Total: ${cartData.cartTotal}`;
    } else {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}

function validateAndSubmit() {
    // Get all input fields
    const inputs = document.querySelectorAll('.co-in');

    // Reset all error messages and borders
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.innerText = '';
    });

    let allFieldsValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            const errorMessageId = input.id + '-error';
            document.getElementById(errorMessageId).innerText = 'Cannot be empty';
            input.classList.add('error');
            allFieldsValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!allFieldsValid) {
        return;
    }

    // If no error, submit the form
    console.log('Form submitted successfully!');
    displayOrderConfirmation();
}

function displayOrderConfirmation() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'none';
});
