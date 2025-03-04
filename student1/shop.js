let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
let timer; // Declare timer variable outside the function

showSlides();

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(timer); // Clear existing timeout
    showSlides(n - 1);
}

function showSlides(n) {
    clearTimeout(timer); // Clear existing timeout

    if (n === undefined) { // Initial call
        slideIndex++;
    } else {
        slideIndex = n;
    }

    if (slideIndex >= slides.length) { slideIndex = 0 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");

    timer = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
// Function to increment quantity
function incrementQuantity(btn) {
    const quantityInput = btn.parentNode.querySelector('.quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

// Function to decrement quantity
function decrementQuantity(btn) {
    const quantityInput = btn.parentNode.querySelector('.quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Function to toggle cart partition visibility
function toggleCart() {
    const cartPartition = document.querySelector('.cart-partition');
    cartPartition.style.display = cartPartition.style.display === 'block' ? 'none' : 'block';
}

// Function to toggle cart partition visibility
function toggleCartPartition() {
    const cartPartition = document.querySelector('.cart-partition');
    cartPartition.classList.toggle('active');
}


// Function to update cart total
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemPrice = parseFloat(item.querySelector('.cart-item-price').innerText.replace('$', ''));
        totalPrice += itemPrice;
    });

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to add item to cart
function addItemToCart(button) {
    // Extract item details from the button
    const itemName = button.dataset.name;
    const itemPrice = button.dataset.price;
    const itemImage = button.dataset.image;
    const quantity = parseInt(button.parentNode.querySelector('.quantity').value);

    // Loop to add multiple items based on quantity
    for (let i = 0; i < quantity; i++) {
        // Create cart item element
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Set HTML content for cart item
        cartItem.innerHTML = `
            <img src="${itemImage}" alt="${itemName}" class="cart-item-image">
            <div class="item-details">
                <span class="cart-item-name">${itemName}</span>
                <span class="cart-item-price">$${itemPrice}</span>
            </div>
            <button class="remove-btn" onclick="removeItem(this)">Remove</button>
        `;

        // Append cart item to cart partition
        const cartPartition = document.querySelector('.cart-items');
        cartPartition.appendChild(cartItem);
    }

    // Update cart total
    updateCartTotal();
}
function removeItem(btn) {
    const cartItem = btn.parentNode;
    cartItem.remove();

    // Update cart total after removing item
    updateCartTotal();
}

function proceed_checkout() {
    window.location.href = 'shop_checkout.html';
}