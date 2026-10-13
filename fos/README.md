<!-- README.md -->
# 🍔 Food Cart System

A complete frontend-only food ordering and management system built with **HTML5, CSS3, and vanilla JavaScript**. No frameworks, no backend — data is stored in **localStorage**.

![Food Cart Banner](assets/images/banner.png)

---

## 📋 Project Overview

The Food Cart System is a professional web application that simulates a real small restaurant ordering and POS (Point of Sale) system. It includes a full customer-facing interface for browsing, ordering, and tracking food, plus a complete admin panel for managing menu items, orders, customers, and viewing reports.

---

## ✨ Features

### Customer Side
- 🏠 **Home** — Hero section, featured items, categories, benefits
- 📖 **Menu** — Browse, search, and filter by category; add to cart
- 🛒 **Cart** — Quantity controls, remove items, live totals
- 💳 **Checkout** — Customer details, payment method, validation, order placement
- 📦 **Orders** — Order history with status badges and invoice links
- 🧾 **Invoice** — Print-friendly A4 invoice with `window.print()`

### Admin Side
- 🔐 **Login** — Demo authentication (localStorage flag)
- 📊 **Dashboard** — KPIs, recent orders, top-selling items
- 🍔 **Menu Management** — Add/edit/delete items, toggle availability
- 📦 **Order Management** — Search, filter, update status
- 👥 **Customers** — List with order counts and total spent
- 📈 **Reports** — Sales KPIs, category charts, status distribution

### Technical
- ✅ Fully responsive (mobile-first, 320px – desktop)
- ✅ localStorage persistence for menu, orders, cart, customers
- ✅ Form validation with inline error messages
- ✅ Toast notifications for all actions
- ✅ Confirmation dialogs for destructive actions
- ✅ Empty states for cart, orders, and menu
- ✅ Accessible semantic HTML with visible focus states
- ✅ No external dependencies — pure vanilla JS/CSS

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling, variables, flexbox, grid, animations |
| JavaScript (ES6+) | DOM manipulation, localStorage, app logic |
| localStorage | Demo data persistence (no backend) |
| Inline SVG / CSS gradients | Image placeholders (no broken links) |

---

## 📁 Folder Structure
