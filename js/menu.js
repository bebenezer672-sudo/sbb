// Cart variables
let cart = document.querySelector(".cart-count");
const cartempty = document.querySelector(".cart-empty");
let cartcount = 0;
let total = 0;
let cartItems = []; // Array to store cart items
const totalAmount = document.querySelector("#totalAmount");

// Cart overlay elements
const cartBtn = document.querySelector("#cartBtn");
const cartOverlay = document.querySelector("#cartOverlay");
const cartClose = document.querySelector("#cartClose");
const clearCartBtn = document.querySelector(".clear-cart-btn");
const checkoutBtn = document.querySelector("#checkoutBtn");

// Load menu from JSON
fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    renderMenu(data);
    setupCartEventListeners();
    loadCartFromStorage(); // Load saved cart
  })
  .catch(error => console.error('Error loading menu:', error));

// Render complete menu
function renderMenu(data) {
  const menuSection = document.querySelector("#all-items");
  menuSection.innerHTML = "";
  
  // Render each category
  Object.keys(data.categories).forEach(categoryKey => {
    const category = data.categories[categoryKey];
    const categoryItems = data.menu.filter(item => item.category === categoryKey);
    
    const categoryHTML = `
      <div class="menu-category-section" data-category="${categoryKey}" id="${categoryKey}-section">
        <h2 class="category-title">${category.title}</h2>
        <div class="menu-cards">
          ${categoryItems.map(item => createMenuCard(item)).join('')}
        </div>
      </div>
    `;
    
    menuSection.innerHTML += categoryHTML;
  });
}

// Create individual menu card
function createMenuCard(item) {
  return `
    <div class="menu-card" data-category="${item.category}">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.alt}">
        <div class="card-overlay">
          <span class="price">${item.price}</span>
        </div>
      </div>
      <div class="menu-card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="add-to-cart" value="${item.priceNumeric}">Add to Cart</button>
      </div>
    </div>
  `;
}

// Setup cart event listeners after menu is loaded
function setupCartEventListeners() {
  // Add to cart functionality
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
      addToCart(e.target);
    }
  });
  
  // Cart overlay controls
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      cartOverlay.classList.add("active");
    });
  }
  
  if (cartClose) {
    cartClose.addEventListener("click", () => {
      cartOverlay.classList.remove("active");
    });
  }
  
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
  }
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", processCheckout);
  }
}

// Add item to cart
function addToCart(button) {
  cartcount++;
  const price = parseFloat(button.value);
  total += price;
  
  // Get item info from the menu card
  const menuCard = button.closest('.menu-card');
  const itemName = menuCard.querySelector('h3').textContent;
  const itemImage = menuCard.querySelector('img').src;
  const itemPrice = button.value;
  
  // Create cart item object
  const cartItem = {
    name: itemName,
    image: itemImage,
    price: itemPrice,
    priceNumeric: price,
    id: Date.now() // Unique ID for each item
  };
  
  // Add to cart items array
  cartItems.push(cartItem);
  
  // Update cart display
  if (cart) cart.textContent = cartcount;
  if (totalAmount) totalAmount.textContent = "€" + total.toFixed(2);
  
  // Hide empty cart message
  if (cartempty) cartempty.style.display = "none";
  
  // Add item to cart list with image and details
  const cartItemsContainer = document.querySelector(".cart-items");
  if (cartItemsContainer) {
    const cartItemElement = document.createElement("div");
    cartItemElement.className = "cart-item";
    cartItemElement.setAttribute('data-item-id', cartItem.id);
    cartItemElement.innerHTML = `
      <div class="cart-item-image">
        <img src="${itemImage}" alt="${itemName}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${itemName}</h4>
        <span class="cart-item-price">€${itemPrice}</span>
      </div>
      <button class="remove-item" onclick="removeCartItem(this, ${cartItem.id})">×</button>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  }
  
  // Save to localStorage
  saveCartToStorage();
}

// Clear cart
function clearCart() {
  cartcount = 0;
  total = 0;
  cartItems = []; // Clear items array
  
  if (totalAmount) totalAmount.textContent = "€0.00";
  if (cart) cart.textContent = cartcount;
  if (cartempty) cartempty.style.display = "block";
  
  // Clear cart items from DOM
  const cartItemsContainer = document.querySelector(".cart-items");
  if (cartItemsContainer) {
    const items = cartItemsContainer.querySelectorAll('.cart-item');
    items.forEach(item => item.remove());
  }
  
  // Save empty cart to localStorage
  saveCartToStorage();
}

// Remove individual item from cart
function removeCartItem(button, itemId) {
  const cartItemElement = button.closest('.cart-item');
  const priceText = cartItemElement.querySelector('.cart-item-price').textContent;
  const itemPrice = parseFloat(priceText.replace('€', ''));
  
  // Update counters
  cartcount--;
  total -= itemPrice;
  
  // Remove from cartItems array
  cartItems = cartItems.filter(item => item.id !== itemId);
  
  // Update display
  if (cart) cart.textContent = cartcount;
  if (totalAmount) totalAmount.textContent = "€" + total.toFixed(2);
  
  // Remove item from DOM
  cartItemElement.remove();
  
  // Show empty message if cart is empty
  if (cartcount === 0 && cartempty) {
    cartempty.style.display = "block";
  }
  
  // Save to localStorage
  saveCartToStorage();
}

// Save cart to localStorage
function saveCartToStorage() {
  const cartData = {
    items: cartItems,
    count: cartcount,
    total: total
  };
  localStorage.setItem('bristoCart', JSON.stringify(cartData));
}

// Load cart from localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('bristoCart');
  
  if (savedCart) {
    const cartData = JSON.parse(savedCart);
    cartItems = cartData.items || [];
    cartcount = cartData.count || 0;
    total = cartData.total || 0;
    
    // Update cart display
    if (cart) cart.textContent = cartcount;
    if (totalAmount) totalAmount.textContent = "€" + total.toFixed(2);
    
    // Hide/show empty cart message
    if (cartempty) {
      cartempty.style.display = cartcount > 0 ? "none" : "block";
    }
    
    // Recreate cart items in DOM
    const cartItemsContainer = document.querySelector(".cart-items");
    if (cartItemsContainer && cartItems.length > 0) {
      cartItems.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.className = "cart-item";
        cartItemElement.setAttribute('data-item-id', item.id);
        cartItemElement.innerHTML = `
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-name">${item.name}</h4>
            <span class="cart-item-price">€${item.price}</span>
          </div>
          <button class="remove-item" onclick="removeCartItem(this, ${item.id})">×</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
      });
    }
  }
}

// Make removeCartItem available globally
window.removeCartItem = removeCartItem;

// Process checkout
function processCheckout() {
  // Check if cart is empty
  if (cartcount === 0) {
    showCheckoutMessage("Your cart is empty!", "error");
    return;
  }
  
  // Create order summary
  const orderSummary = {
    items: cartItems,
    totalItems: cartcount,
    totalAmount: total.toFixed(2),
    orderDate: new Date().toLocaleDateString(),
    orderTime: new Date().toLocaleTimeString()
  };
  
  // Show success message
  showCheckoutMessage(
    `Order placed successfully!<br>
    Total: €${total.toFixed(2)}<br>
    Items: ${cartcount}<br>
    Thank you for your order!`, 
    "success"
  );
  
  // Clear cart after successful checkout
  setTimeout(() => {
    clearCart();
    cartOverlay.classList.remove("active");
  }, 3000);
  
  // Log order (in real app, this would be sent to server)
  console.log("Order placed:", orderSummary);
}

// Show checkout message
function showCheckoutMessage(message, type) {
  // Remove existing message if any
  const existingMessage = document.querySelector('.checkout-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.className = `checkout-message checkout-${type}`;
  messageDiv.innerHTML = `
    <div class="checkout-message-content">
      <div class="checkout-icon">${type === 'success' ? '✅' : '❌'}</div>
      <div class="checkout-text">${message}</div>
      <button class="checkout-close" onclick="closeCheckoutMessage()">×</button>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(messageDiv);
  
  // Auto remove after 5 seconds for success, 3 seconds for error
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, type === 'success' ? 5000 : 3000);
}

// Close checkout message
function closeCheckoutMessage() {
  const message = document.querySelector('.checkout-message');
  if (message) {
    message.remove();
  }
}

// Make functions available globally
window.closeCheckoutMessage = closeCheckoutMessage;

