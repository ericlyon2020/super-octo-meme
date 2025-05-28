// Scroll to top functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.fontSize = '16px';
scrollToTopButton.style.backgroundColor = '#f8d700';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none'; // Initially hidden
document.body.appendChild(scrollToTopButton);

// Show the scroll-to-top button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Function to open Call or WhatsApp based on button clicked
function openContact(method, productName) {
  let contactLink = '';
  
  // For 'Call' button
  if (method === 'call') {
    contactLink = 'tel:+254759211966';  // Replace with your phone number
  } 
  // For 'WhatsApp' button
  else if (method === 'whatsapp') {
    // Format the message
    contactLink = 'https://wa.me/254759211966?text=Hi%20I%20am%20interested%20in%20the%20' + encodeURIComponent(productName);
  }
  
  // Redirect the user to the contact method
  window.location.href = contactLink;
}

// Event listener for all 'Call' and 'WhatsApp' buttons
const contactButtons = document.querySelectorAll('.call-btn, .whatsapp-btn');
contactButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.closest('.product-card').querySelector('h3').textContent;  // Get the product name
    const method = e.target.classList.contains('call-btn') ? 'call' : 'whatsapp';  // Determine which method was clicked
    openContact(method, productName);  // Open the contact method with the product name
  });
});

// Form Validation (Optional, if you plan to use forms later)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');
    
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill in all fields before submitting.');
      e.preventDefault(); // Prevent form submission
    }
  });
}
