// assets/js/invoice.js
/* ===== Invoice Page Logic ===== */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('invoiceContainer');
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('id');

  if (!orderId) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🧾</span>
        <h2>No order specified</h2>
        <p>Please select an order to view its invoice.</p>
        <a href="orders.html" class="btn btn-primary">View Orders</a>
      </div>
    `;
    return;
  }

  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">❌</span>
        <h2>Order not found</h2>
        <p>The requested order could not be located.</p>
        <a href="orders.html" class="btn btn-primary">View Orders</a>
      </div>
    `;
    return;
  }

  const subtotal = order.subtotal || order.items.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = order.deliveryFee || 2.99;
  const total = order.total || (subtotal + deliveryFee);

  container.innerHTML = `
    <div class="invoice-header">
      <div>
        <div class="logo">🍔 FoodCart</div>
        <div class="business-info">
          <p>123 Food Street, Karachi</p>
          <p>Phone: 0300-1234567 | Email: info@foodcart.local</p>
        </div>
      </div>
      <div>
        <div class="invoice-title">INVOICE</div>
        <div class="invoice-meta">
          <p><strong>Invoice No:</strong> #${order.id}</p>
          <p><strong>Date:</strong> ${formatDate(order.createdAt)}</p>
          <p><strong>Status:</strong> <span class="status-badge status-${order.status.toLowerCase().replace(/\s+/g, '-')}">${order.status}</span></p>
        </div>
      </div>
    </div>

    <div class="invoice-customer">
      <h3>Bill To</h3>
      <p><strong>${order.customer.name}</strong></p>
      <p>${order.customer.phone}</p>
      ${order.customer.email ? `<p>${order.customer.email}</p>` : ''}
      <p>${order.customer.address}${order.customer.city ? ', ' + order.customer.city : ''}</p>
    </div>

    <table class="invoice-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${order.items.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${formatCurrency(item.price)}</td>
            <td>${item.quantity}</td>
            <td>${formatCurrency(item.price * item.quantity)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="invoice-totals">
      <div class="summary-row"><span>Subtotal</span><span>${formatCurrency(subtotal)}</span></div>
      <div class="summary-row"><span>Delivery Fee</span><span>${formatCurrency(deliveryFee)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatCurrency(total)}</span></div>
    </div>

    <div class="invoice-customer" style="margin-top: 0;">
      <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
    </div>

    <div class="invoice-footer">
      <p>Thank you for your order! 🍔</p>
    </div>
  `;

  updateCartCount();
});