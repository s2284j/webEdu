// assets/js/checkout.js
/* ===== Checkout Page Logic ===== */
document.addEventListener('DOMContentLoaded', () => {
  const checkoutLayout = document.getElementById('checkoutLayout');
  const emptyCheckout = document.getElementById('emptyCheckout');
  const checkoutItems = document.getElementById('checkoutItems');
  const checkoutSubtotal = document.getElementById('checkoutSubtotal');
  const checkoutDelivery = document.getElementById('checkoutDelivery');
  const checkoutTotal = document.getElementById('checkoutTotal');
  const form = document.getElementById('checkoutForm');

  const DELIVERY_FEE = 2.99;

  function loadSummary() {
    const cart = getCart();
    const menuItems = getMenuItems();

    if (cart.length === 0) {
      checkoutLayout.style.display = 'none';
      emptyCheckout.style.display = 'block';
      return false;
    }

    checkoutLayout.style.display = 'grid';
    emptyCheckout.style.display = 'none';

    let subtotal = 0;
    const items = [];

    cart.forEach(ci => {
      const mi = menuItems.find(m => m.id === ci.itemId);
      if (!mi) return;
      const lineTotal = mi.price * ci.quantity;
      subtotal += lineTotal;
      items.push({ ...mi, quantity: ci.quantity, lineTotal });
    });

    if (items.length === 0) {
      checkoutLayout.style.display = 'none';
      emptyCheckout.style.display = 'block';
      return false;
    }

    checkoutItems.innerHTML = items.map(item => `
      <div class="checkout-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>${formatCurrency(item.lineTotal)}</span>
      </div>
    `).join('');

    checkoutSubtotal.textContent = formatCurrency(subtotal);
    checkoutDelivery.textContent = formatCurrency(DELIVERY_FEE);
    checkoutTotal.textContent = formatCurrency(subtotal + DELIVERY_FEE);
    return true;
  }

  function validateField(id, message) {
    const el = document.getElementById(id);
    const err = document.getElementById('err-' + id);
    if (!el.value.trim()) {
      el.classList.add('error');
      if (err) err.textContent = message;
      return false;
    }
    el.classList.remove('error');
    if (err) err.textContent = '';
    return true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    valid &= validateField('fullName', 'Full name is required');
    valid &= validateField('phone', 'Phone number is required');
    valid &= validateField('address', 'Address is required');
    valid &= validateField('city', 'City/Area is required');

    // Phone format check
    const phone = document.getElementById('phone').value.trim();
    if (phone && !/^[0-9+\-\s]{7,15}$/.test(phone)) {
      document.getElementById('phone').classList.add('error');
      document.getElementById('err-phone').textContent = 'Enter a valid phone number';
      valid = false;
    }

    if (!valid) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    // Check cart still has items
    const cart = getCart();
    if (cart.length === 0) {
      showToast('Your cart is empty', 'error');
      return;
    }

    const menuItems = getMenuItems();
    const items = [];
    let subtotal = 0;

    cart.forEach(ci => {
      const mi = menuItems.find(m => m.id === ci.itemId);
      if (mi) {
        const lineTotal = mi.price * ci.quantity;
        subtotal += lineTotal;
        items.push({
          id: mi.id,
          name: mi.name,
          price: mi.price,
          quantity: ci.quantity,
          category: mi.category,
        });
      }
    });

    const total = subtotal + DELIVERY_FEE;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Create order
    const orders = getOrders();
    const newId = 'ORD-' + String(1000 + orders.length + 1).padStart(4, '0');

    const order = {
      id: newId,
      customer: {
        name: document.getElementById('fullName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        address: document.getElementById('address').value.trim(),
        city: document.getElementById('city').value.trim(),
      },
      items: items,
      subtotal: subtotal,
      deliveryFee: DELIVERY_FEE,
      total: total,
      paymentMethod: paymentMethod,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    orders.push(order);
    saveOrders(orders);

    // Save customer if new
    const customers = getCustomers();
    const existing = customers.find(c => c.phone === order.customer.phone);
    if (!existing) {
      customers.push({
        id: customers.length + 1,
        name: order.customer.name,
        phone: order.customer.phone,
        email: order.customer.email,
        address: order.customer.address,
        createdAt: new Date().toISOString(),
      });
      saveCustomers(customers);
    }

    // Clear cart
    saveCart([]);
    updateCartCount();

    showToast('Order placed successfully!', 'success');
    setTimeout(() => {
      window.location.href = 'invoice.html?id=' + newId;
    }, 800);
  });

  loadSummary();
});