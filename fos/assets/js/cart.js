// assets/js/cart.js
/* ===== Cart Page Logic ===== */
document.addEventListener('DOMContentLoaded', () => {
  const cartLayout = document.getElementById('cartLayout');
  const emptyCart = document.getElementById('emptyCart');
  const cartItemsEl = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('subtotal');
  const deliveryFeeEl = document.getElementById('deliveryFee');
  const grandTotalEl = document.getElementById('grandTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const DELIVERY_FEE = 2.99;

  function renderCart() {
    const cart = getCart();
    const menuItems = getMenuItems();

    if (cart.length === 0) {
      cartLayout.style.display = 'none';
      emptyCart.style.display = 'block';
      return;
    }

    cartLayout.style.display = 'grid';
    emptyCart.style.display = 'none';

    let subtotal = 0;
    const validItems = [];

    cart.forEach(cartItem => {
      const menuItem = menuItems.find(m => m.id === cartItem.itemId);
      if (!menuItem) return;
      const lineTotal = menuItem.price * cartItem.quantity;
      subtotal += lineTotal;
      validItems.push({ cartItem, menuItem, lineTotal });
    });

    if (validItems.length === 0) {
      cartLayout.style.display = 'none';
      emptyCart.style.display = 'block';
      return;
    }

    cartItemsEl.innerHTML = validItems.map(({ cartItem, menuItem, lineTotal }) => `
      <div class="cart-item" data-id="${menuItem.id}">
        <div class="cart-item-img">
          ${menuItem.image ? `<img src="${menuItem.image}" alt="${menuItem.name}">` : '🍔'}
        </div>
        <div class="cart-item-info">
          <h4>${menuItem.name}</h4>
          <div class="cart-item-price">${formatCurrency(menuItem.price)}</div>
        </div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn qty-dec" data-id="${menuItem.id}">−</button>
            <span class="qty-value">${cartItem.quantity}</span>
            <button class="qty-btn qty-inc" data-id="${menuItem.id}">+</button>
          </div>
          <button class="remove-btn" data-id="${menuItem.id}" title="Remove item">🗑️</button>
        </div>
      </div>
    `).join('');

    const grandTotal = subtotal + DELIVERY_FEE;
    subtotalEl.textContent = formatCurrency(subtotal);
    deliveryFeeEl.textContent = formatCurrency(DELIVERY_FEE);
    grandTotalEl.textContent = formatCurrency(grandTotal);

    // Attach events
    document.querySelectorAll('.qty-inc').forEach(btn => {
      btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 1));
    });
    document.querySelectorAll('.qty-dec').forEach(btn => {
      btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), -1));
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => removeItem(parseInt(btn.dataset.id)));
    });
  }

  function updateQuantity(itemId, delta) {
    let cart = getCart();
    const item = cart.find(c => c.itemId === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(c => c.itemId !== itemId);
    }
    saveCart(cart);
    updateCartCount();
    renderCart();
  }

  function removeItem(itemId) {
    if (!confirm('Remove this item from your cart?')) return;
    let cart = getCart();
    cart = cart.filter(c => c.itemId !== itemId);
    saveCart(cart);
    updateCartCount();
    renderCart();
    showToast('Item removed from cart', 'info');
  }

  // Checkout button
  checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) {
      showToast('Your cart is empty', 'error');
      return;
    }
    window.location.href = 'checkout.html';
  });

  renderCart();
});