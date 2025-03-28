// document.getElementById('menu_bar').addEventListener('click', function () {
//     document.querySelector('.dropMenu').classList.toggle('showDropMenu');
// });

// const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000, // Animation speed in milliseconds
//     easing: 'easeInOutCubic', // Easing function
//     offset: 100, // Scroll offset in pixels
// });


// function toggleAnswer(id) {
//     // Hide all answers
//     document.querySelectorAll('.faq-answer').forEach(function(answer) {
//         answer.classList.remove('show');
//     });
//     // Show the answer for the clicked question
//     document.getElementById('answer' + id).classList.add('show');
// }
// Mobile Menu Toggle
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