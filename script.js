const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// FAQ Toggle
function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const isActive = answer.classList.contains('active');
  
  // Close all FAQs
  document.querySelectorAll('.faq-answer').forEach(item => {
    item.classList.remove('active');
  });
  
  document.querySelectorAll('.faq-question').forEach(item => {
    item.classList.remove('active');
  });
  
  // Open clicked FAQ if it wasn't already open
  if (!isActive) {
    answer.classList.add('active');
    element.classList.add('active');
  }
}
