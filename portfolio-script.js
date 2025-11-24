// Portfolio JavaScript

// Matrix Effect
const matrixCanvas = document.getElementById('matrix-bg');
const ctx = matrixCanvas.getContext('2d');
let matrixActive = false;
let animationId;

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
});

function toggleMatrix() {
  matrixActive = !matrixActive;
  matrixCanvas.classList.toggle('active');
  
  if (matrixActive) {
    startMatrix();
  } else {
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
  }
}

function startMatrix() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const fontSize = 14;
  const columns = matrixCanvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  
  function draw() {
    if (!matrixActive) return;
    
    ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    
    animationId = requestAnimationFrame(draw);
  }
  
  draw();
}

// Mobile Menu
function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

function closeMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('active');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(26, 27, 38, 0.98)';
  } else {
    navbar.style.background = 'rgba(26, 27, 38, 0.95)';
  }
});

// Animate Skills on Scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillFills = entry.target.querySelectorAll('.skill-fill');
      skillFills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  formStatus.textContent = 'Sending...';
  formStatus.className = '';
  formStatus.style.display = 'block';
  
  try {
    // Replace with your email service
    // Using FormSubmit.co as example
    const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
      formStatus.className = 'success';
      contactForm.reset();
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    formStatus.textContent = '✗ Failed to send message. Please try again or email me directly.';
    formStatus.className = 'error';
  }
  
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
});

// Recruiter Modal
function openRecruiterMode() {
  document.getElementById('recruiter-modal').classList.add('show');
}

function closeRecruiterMode() {
  document.getElementById('recruiter-modal').classList.remove('show');
}

// Close modal on outside click
document.getElementById('recruiter-modal').addEventListener('click', (e) => {
  if (e.target.id === 'recruiter-modal') {
    closeRecruiterMode();
  }
});

// Job Match Analysis
function analyzeMatch() {
  const jobDesc = document.getElementById('job-description').value.toLowerCase();
  
  if (!jobDesc.trim()) {
    alert('Please paste a job description first!');
    return;
  }
  
  // Skills database
  const skills = [
    'javascript', 'typescript', 'react', 'angular', 'vue', 'node.js', 'nodejs',
    'python', 'java', 'kotlin', 'html', 'css', 'sql', 'mongodb', 'postgresql',
    'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'git', 'ci/cd', 'agile',
    'rest', 'api', 'graphql', 'redux', 'express', 'django', 'flask', 'spring'
  ];
  
  // Find matching skills
  const matchedSkills = skills.filter(skill => jobDesc.includes(skill));
  const matchPercentage = Math.min(Math.round((matchedSkills.length / 10) * 100), 100);
  
  // Determine match level
  let matchClass, recommendation;
  if (matchPercentage >= 70) {
    matchClass = 'match-high';
    recommendation = '✓ Excellent match! I have strong experience with the required technologies and would be a great fit for this role.';
  } else if (matchPercentage >= 50) {
    matchClass = 'match-medium';
    recommendation = '⚠ Good match! I have experience with many of the required skills and am quick to learn new technologies.';
  } else {
    matchClass = 'match-low';
    recommendation = '✗ Partial match. While I may not have all the specific technologies listed, I have strong fundamentals and adapt quickly.';
  }
  
  // Display results
  const resultDiv = document.getElementById('match-result');
  resultDiv.innerHTML = `
    <h3>Match Analysis Report</h3>
    <div class="match-score ${matchClass}">${matchPercentage}%</div>
    
    <div style="margin: 1.5rem 0;">
      <strong style="color: var(--primary);">Matched Skills:</strong>
      <p style="margin-top: 0.5rem;">
        ${matchedSkills.length > 0 ? matchedSkills.join(', ') : 'Please provide more technical details in the job description'}
      </p>
    </div>
    
    <div style="margin: 1.5rem 0;">
      <strong style="color: var(--primary);">Recommendation:</strong>
      <p style="margin-top: 0.5rem; line-height: 1.6;">${recommendation}</p>
    </div>
    
    <div style="margin: 1.5rem 0;">
      <strong style="color: var(--primary);">Next Steps:</strong>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
        <li>Review my full portfolio and projects above</li>
        <li>Check my GitHub for code samples</li>
        <li>Contact me using the form below</li>
        <li>Schedule an interview to discuss the role</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
      <a href="#contact" onclick="closeRecruiterMode()" class="btn btn-primary">Contact Me Now</a>
    </div>
  `;
  
  resultDiv.classList.add('show');
}

// Scroll Animations
const fadeElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        entry.target.style.transition = 'opacity 0.6s, transform 0.6s';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 100);
      
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully!');
  console.log('Type toggleMatrix() in console to activate Matrix effect');
});
