// data/seed-data.js
/* ===== Seed Data ===== */
const SEED_MENU_ITEMS = [
  { 
    id: 1, 
    name: 'Beef Burger', 
    category: 'Burgers', 
    price: 5.99, 
    image: 'assets/images/beef-burger.jpg',   // ← yahan path
    description: 'Juicy beef patty with cheese, lettuce, and special sauce.', 
    available: true 
  },
  { 
    id: 2, 
    name: 'Chicken Burger', 
    category: 'Burgers', 
    price: 4.99, 
    image: 'assets/images/chicken-burger.jpg', 
    description: 'Crispy chicken fillet with mayo and fresh salad.', 
    available: true 
  },
  { 
    id: 3, 
    name: 'Pizza', 
    category: 'Pizza', 
    price: 7.99, 
    image: 'assets/images/pizza.jpg', 
    description: 'Cheesy pizza with fresh basil and tomato sauce.', 
    available: true 
  },
  { 
    id: 4, 
    name: 'French Fries', 
    category: 'Snacks', 
    price: 2.99, 
    image: 'assets/images/french-fries.jpg', 
    description: 'Golden crispy fries with ketchup.', 
    available: true 
  },
  { 
    id: 5, 
    name: 'Coke', 
    category: 'Drinks', 
    price: 1.99, 
    image: 'assets/images/coke.jpg', 
    description: 'Chilled Coca-Cola 500ml.', 
    available: true 
  },
  { 
    id: 6, 
    name: 'Ice Cream', 
    category: 'Desserts', 
    price: 3.49, 
    image: 'assets/images/ice-cream.jpg', 
    description: 'Creamy vanilla ice cream with chocolate sauce.', 
    available: true 
  },
  { 
    id: 7, 
    name: 'Chocolate Cake', 
    category: 'Desserts', 
    price: 4.99, 
    image: 'assets/images/chocolate-cake.jpg', 
    description: 'Rich dark chocolate cake slice.', 
    available: true 
  },
  { 
    id: 8, 
    name: 'Mozzarella Sticks', 
    category: 'Snacks', 
    price: 3.99, 
    image: 'assets/images/mozzarella-sticks.jpg', 
    description: 'Fried mozzarella with marinara dip.', 
    available: false 
  },
  { 
    id: 9, 
    name: 'Pepperoni Pizza', 
    category: 'Pizza', 
    price: 8.99, 
    image: 'assets/images/pepperoni-pizza.jpg', 
    description: 'Classic pepperoni with extra cheese.', 
    available: true 
  },
  { 
    id: 10, 
    name: 'Lemonade', 
    category: 'Drinks', 
    price: 2.49, 
    image: 'assets/images/lemonade.jpg', 
    description: 'Fresh squeezed lemonade with mint.', 
    available: true 
  },
];

const SEED_CUSTOMERS = [
  { id: 1, name: 'John Doe', phone: '03001234567', email: 'john@example.com', address: 'House 1, Street 2, Karachi', createdAt: '2025-01-10T10:00:00Z' },
  { id: 2, name: 'Sarah Khan', phone: '03211234567', email: 'sarah@example.com', address: 'Flat 5, Block B, Lahore', createdAt: '2025-02-14T12:00:00Z' },
  { id: 3, name: 'Ali Raza', phone: '03331234567', email: 'ali@example.com', address: 'House 10, Street 5, Islamabad', createdAt: '2025-03-01T09:00:00Z' },
  { id: 4, name: 'Ayesha Butt', phone: '03451234567', email: 'ayesha@example.com', address: 'House 7, DHA Phase 2, Karachi', createdAt: '2025-03-15T14:00:00Z' },
];

const SEED_ORDERS = [
  {
    id: 'ORD-1001',
    customer: { name: 'John Doe', phone: '03001234567', email: 'john@example.com', address: 'House 1, Street 2, Karachi', city: 'Karachi' },
    items: [
      { id: 1, name: 'Beef Burger', price: 5.99, quantity: 1, category: 'Burgers' },
      { id: 4, name: 'French Fries', price: 2.99, quantity: 1, category: 'Snacks' },
    ],
    subtotal: 8.98,
    deliveryFee: 2.99,
    total: 11.97,
    paymentMethod: 'Cash on Delivery',
    status: 'Delivered',
    createdAt: '2025-06-11T11:45:00Z',
  },
  {
    id: 'ORD-1002',
    customer: { name: 'Sarah Khan', phone: '03211234567', email: 'sarah@example.com', address: 'Flat 5, Block B, Lahore', city: 'Lahore' },
    items: [
      { id: 3, name: 'Pizza', price: 7.99, quantity: 1, category: 'Pizza' },
      { id: 5, name: 'Coke', price: 1.99, quantity: 2, category: 'Drinks' },
    ],
    subtotal: 11.97,
    deliveryFee: 2.99,
    total: 14.96,
    paymentMethod: 'Online Payment',
    status: 'Delivered',
    createdAt: '2025-06-12T10:05:00Z',
  },
  {
    id: 'ORD-1003',
    customer: { name: 'Ali Raza', phone: '03331234567', email: 'ali@example.com', address: 'House 10, Street 5, Islamabad', city: 'Islamabad' },
    items: [
      { id: 2, name: 'Chicken Burger', price: 4.99, quantity: 1, category: 'Burgers' },
      { id: 4, name: 'French Fries', price: 2.99, quantity: 1, category: 'Snacks' },
      { id: 7, name: 'Chocolate Cake', price: 4.99, quantity: 1, category: 'Desserts' },
    ],
    subtotal: 12.97,
    deliveryFee: 2.99,
    total: 15.96,
    paymentMethod: 'Cash on Delivery',
    status: 'Out for Delivery',
    createdAt: '2025-06-13T18:23:00Z',
  },
  {
    id: 'ORD-1004',
    customer: { name: 'Ayesha Butt', phone: '03451234567', email: 'ayesha@example.com', address: 'House 7, DHA Phase 2, Karachi', city: 'Karachi' },
    items: [
      { id: 9, name: 'Pepperoni Pizza', price: 8.99, quantity: 1, category: 'Pizza' },
      { id: 6, name: 'Ice Cream', price: 3.49, quantity: 1, category: 'Desserts' },
    ],
    subtotal: 12.48,
    deliveryFee: 2.99,
    total: 15.47,
    paymentMethod: 'Online Payment',
    status: 'Preparing',
    createdAt: '2025-06-14T06:22:00Z',
  },
  {
    id: 'ORD-1005',
    customer: { name: 'John Doe', phone: '03001234567', email: 'john@example.com', address: 'House 1, Street 2, Karachi', city: 'Karachi' },
    items: [
      { id: 1, name: 'Beef Burger', price: 5.99, quantity: 2, category: 'Burgers' },
      { id: 5, name: 'Coke', price: 1.99, quantity: 1, category: 'Drinks' },
    ],
    subtotal: 13.97,
    deliveryFee: 2.99,
    total: 16.96,
    paymentMethod: 'Cash on Delivery',
    status: 'Pending',
    createdAt: '2025-06-15T12:30:00Z',
  },
];

/* ===== localStorage Helpers ===== */
function getMenuItems() {
  const stored = localStorage.getItem('fc_menu_items');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('fc_menu_items', JSON.stringify(SEED_MENU_ITEMS));
  return SEED_MENU_ITEMS;
}

function saveMenuItems(items) {
  localStorage.setItem('fc_menu_items', JSON.stringify(items));
}

function getCustomers() {
  const stored = localStorage.getItem('fc_customers');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('fc_customers', JSON.stringify(SEED_CUSTOMERS));
  return SEED_CUSTOMERS;
}

function saveCustomers(customers) {
  localStorage.setItem('fc_customers', JSON.stringify(customers));
}

function getOrders() {
  const stored = localStorage.getItem('fc_orders');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('fc_orders', JSON.stringify(SEED_ORDERS));
  return SEED_ORDERS;
}

function saveOrders(orders) {
  localStorage.setItem('fc_orders', JSON.stringify(orders));
}

function getCart() {
  const stored = localStorage.getItem('fc_cart');
  if (stored) return JSON.parse(stored);
  return [];
}

function saveCart(cart) {
  localStorage.setItem('fc_cart', JSON.stringify(cart));
}