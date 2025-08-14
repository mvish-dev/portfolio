// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Demo contact form (no backend yet)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Thanks! This demo form does not send emails. Connect to backend.';
  });
}
