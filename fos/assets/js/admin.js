// assets/js/admin.js
/* ===== Shared Admin Utilities ===== */

// Auth guard
function requireAdminAuth() {
  if (localStorage.getItem('fc_admin_logged_in') !== 'true') {
    window.location.href = '../login.html';
    return false;
  }
  return true;
}

// Logout handler
function setupAdminLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('fc_admin_logged_in');
        window.location.href = '../login.html';
      }
    });
  }
}

// Sidebar setup
function setupAdminSidebar() {
  const sidebar = document.getElementById('adminSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggle = document.getElementById('sidebarToggle');
  const close = document.getElementById('sidebarClose');

  if (!sidebar) return;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  if (toggle) toggle.addEventListener('click', openSidebar);
  if (close) close.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
}

// Initialize admin page
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('admin-body')) {
    requireAdminAuth();
    setupAdminSidebar();
    setupAdminLogout();
  }
});