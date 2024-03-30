document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
      
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form validation
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Perform validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }
  
      if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        emailInput.focus();
        return;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        messageInput.focus();
        return;
      }
  
      // Form submission code...
      // You can send the form data to the server or perform other actions here
  
      // Clear form inputs after submission
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
  
      alert('Form submitted successfully!');
    });
  
    // Image slider using Swiper library
    var swiper = new Swiper('.swiper-container', {
      // Customize the options as per your requirements
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });