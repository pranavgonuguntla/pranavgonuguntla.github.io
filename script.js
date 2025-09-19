const slidingWindow = document.querySelector('.sliding-window');
const slidingOverlay = document.querySelector('.sliding-overlay');

if (slidingWindow && slidingOverlay) {
  slidingWindow.addEventListener('mousemove', (e) => {
    const rect = slidingWindow.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    
    const clipPathX = xPercent * 100;
    const clipPathY = yPercent * 100;
    
    slidingOverlay.style.clipPath = `circle(50% at ${clipPathX}% ${clipPathY}%)`;
  });
  
  slidingWindow.addEventListener('mouseleave', () => {
    slidingOverlay.style.clipPath = 'circle(0% at 0% 50%)';
  });
}

const socialIcons = document.querySelector('.social-icons');
if (socialIcons) {
  socialIcons.style.opacity = '0';
  socialIcons.style.transition = 'opacity 0.3s ease';
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
    
    if (scrollPercentage > 0.7) {
      socialIcons.style.opacity = '1';
    } else {
      socialIcons.style.opacity = '0';
    }
  });
}

const footer = document.querySelector('.footer');
if (footer) {
  footer.style.opacity = '0';
  footer.style.transition = 'opacity 0.3s ease';
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
    
    if (scrollPercentage > 0.7) {
      footer.style.opacity = '1';
    } else {
      footer.style.opacity = '0';
    }
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    const mailtoLink = `mailto:saipranav.gonuguntla@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    alert('Your email client will open with the message. Please send the email to complete the process.');
    
    contactForm.reset();
  });
}

function typeTitle() {
  const title = "Pranav Gonuguntla";
  let i = 0;
  
  function typeChar() {
    if (i < title.length) {
      document.title = title.substring(0, i + 1);
      i++;
      setTimeout(typeChar, 150);
    }
  }
  
  setTimeout(typeChar, 500);
}

function typeAndAlternateText() {
  const texts = ["Software Engineer", "Full Stack Developer"];
  let currentIndex = 0;
  const element = document.querySelector('.alternating-text');
  
  if (!element) return;
  
  function typeText(text, callback) {
    element.textContent = '';
    let i = 0;
    
    function typeChar() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 100);
      } else {
        setTimeout(callback, 2000);
      }
    }
    
    setTimeout(typeChar, 500);
  }
  
  function deleteText(callback) {
    let text = element.textContent;
    let i = text.length;
    
    function deleteChar() {
      if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(deleteChar, 50);
      } else {
        setTimeout(callback, 500);
      }
    }
    
    deleteChar();
  }
  
  function cycle() {
    typeText(texts[currentIndex], () => {
      deleteText(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        cycle();
      });
    });
  }
  
  cycle();
}

document.addEventListener('DOMContentLoaded', () => {
  typeTitle();
  typeAndAlternateText();
});