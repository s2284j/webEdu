// assets/js/app.js
/* ===== Shared Utilities ===== */

// Format currency
function formatCurrency(amount) {
  return '$' + Number(amount).toFixed(2);
}

// Format date
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

// Show toast notification
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast ' + type;
  // Trigger reflow
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Get cart count
function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Update cart count display
function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
  });
}

// Add item to cart
function addToCart(itemId) {
  const menuItems = getMenuItems();
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;
  if (!item.available) {
    showToast('This item is currently unavailable', 'error');
    return;
  }

  let cart = getCart();
  const existing = cart.find(c => c.itemId === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ itemId: itemId, quantity: 1 });
  }
  saveCart(cart);
  updateCartCount();
  showToast(`${item.name} added to cart`, 'success');
}

// Create food card HTML
function createFoodCard(item) {
  const available = item.available;
  return `
    <div class="food-card">
      <div class="food-img-wrap">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='🍔'">` : '🍔'}
        <span class="availability-badge ${available ? 'badge-available' : 'badge-unavailable'}">
          ${available ? 'Available' : 'Unavailable'}
        </span>
      </div>
      <div class="food-info">
        <h3>${item.name}</h3>
        <div class="food-category">${item.category}</div>
        <p class="food-desc">${item.description}</p>
        <div class="food-footer">
          <span class="food-price">${formatCurrency(item.price)}</span>
          <button class="add-to-cart-btn" data-id="${item.id}" ${!available ? 'disabled' : ''}>
            ${available ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  `;
}