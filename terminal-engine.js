// Terminal Portfolio Engine - Part 1: Core Setup

// Data Storage
const portfolioData = {
  about: {
    name: "Amine",
    title: "Full Stack Developer",
    location: "Your City, Your Country",
    email: "your.email@example.com",
    bio: "Passionate developer with expertise in modern web technologies and a love for clean code."
  },
  
  skills: {
    frontend: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React/Angular", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Vue.js", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL/NoSQL", level: 85 }
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS/Cloud", level: 80 },
      { name: "CI/CD", level: 85 }
    ]
  },
  
  projects: [
    {
      id: "web-app",
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Redux", "Express"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo.example.com"
    },
    {
      id: "ml-pipeline",
      name: "ML Data Pipeline",
      description: "Machine learning pipeline for predictive analytics",
      tech: ["Python", "TensorFlow", "Pandas", "Docker", "FastAPI"],
      github: "https://github.com/yourusername/ml-pipeline",
      demo: "https://ml-demo.example.com"
    },
    {
      id: "mobile-app",
      name: "Task Manager App",
      description: "Native Android app with offline-first architecture",
      tech: ["Kotlin", "Room", "MVVM", "Coroutines", "Material Design"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://play.google.com/store"
    }
  ],
  
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Leading development of microservices architecture and mentoring junior developers.",
      achievements: [
        "Reduced API response time by 40%",
        "Implemented CI/CD pipeline",
        "Led team of 5 developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Startup XYZ",
      location: "City, Country",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using modern frameworks.",
      achievements: [
        "Built 3 production applications",
        "Improved code coverage to 85%",
        "Optimized database queries"
      ]
    }
  ],
  
  education: [
    {
      degree: "Master's in Computer Science",
      school: "University Name",
      period: "2018 - 2020",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor's in Software Engineering",
      school: "University Name",
      period: "2014 - 2018",
      gpa: "3.6/4.0"
    }
  ],
  
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
    "Kubernetes Administrator"
  ],
  
  updates: [
    {
      date: "2024-11-24",
      title: "Portfolio Enhancement",
      description: "Added interactive terminal with smart features"
    },
    {
      date: "2024-11-20",
      title: "New Certification",
      description: "Completed AWS Solutions Architect certification"
    },
    {
      date: "2024-11-15",
      title: "Open Source",
      description: "Contributed to major open-source project"
    }
  ]
};


// Command definitions with autocomplete support
const commands = {
  help: {
    desc: "Show all available commands",
    usage: "help [command]",
    exec: showHelp
  },
  about: {
    desc: "Display information about me",
    usage: "about",
    exec: showAbout
  },
  skills: {
    desc: "Show my technical skills",
    usage: "skills [category]",
    exec: showSkills
  },
  projects: {
    desc: "List all projects",
    usage: "projects [--detail <id>]",
    exec: showProjects
  },
  experience: {
    desc: "Show work experience",
    usage: "experience",
    exec: showExperience
  },
  education: {
    desc: "Display education background",
    usage: "education",
    exec: showEducation
  },
  contact: {
    desc: "Get contact information",
    usage: "contact",
    exec: showContact
  },
  updates: {
    desc: "Show latest updates",
    usage: "updates",
    exec: showUpdates
  },
  cv: {
    desc: "Open CV Explorer (Windows-style)",
    usage: "cv",
    exec: openCVExplorer
  },
  map: {
    desc: "Show location on map",
    usage: "map",
    exec: showMap
  },
  matrix: {
    desc: "Toggle Matrix effect",
    usage: "matrix",
    exec: toggleMatrix
  },
  clear: {
    desc: "Clear terminal screen",
    usage: "clear",
    exec: clearTerminal
  },
  all: {
    desc: "Show all information at once",
    usage: "all",
    exec: showAll
  }
};


// Terminal State
let commandHistory = [];
let historyIndex = -1;
let currentSuggestionIndex = -1;
let matrixActive = false;

// DOM Elements
const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');
const suggestions = document.getElementById('autocomplete-suggestions');
const matrixCanvas = document.getElementById('matrix-bg');
const matrixCtx = matrixCanvas.getContext('2d');

// Initialize
function init() {
  commandInput.focus();
  printWelcome();
  setupEventListeners();
  setupMatrix();
}

function printWelcome() {
  const welcome = `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Welcome to Amine's Interactive Portfolio Terminal      ║
║                                                           ║
║   Type 'help' to see available commands                  ║
║   Type 'all' to see everything at once                   ║
║   Use TAB for autocomplete                               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `;
  printOutput(welcome, 'success');
}


function setupEventListeners() {
  commandInput.addEventListener('keydown', handleKeyDown);
  commandInput.addEventListener('input', handleInput);
  
  // Matrix toggle button
  document.getElementById('matrix-toggle').addEventListener('click', toggleMatrix);
  
  // Recruiter mode button
  document.getElementById('recruiter-mode').addEventListener('click', () => {
    document.getElementById('recruiter-panel').classList.add('show');
  });
  
  // Keep focus on input
  document.addEventListener('click', () => commandInput.focus());
}

function handleKeyDown(e) {
  switch(e.key) {
    case 'Enter':
      e.preventDefault();
      executeCommand();
      break;
    case 'ArrowUp':
      e.preventDefault();
      navigateHistory('up');
      break;
    case 'ArrowDown':
      e.preventDefault();
      navigateHistory('down');
      break;
    case 'Tab':
      e.preventDefault();
      handleTabComplete();
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      if (suggestions.classList.contains('show')) {
        e.preventDefault();
        navigateSuggestions(e.key === 'ArrowUp' ? 'up' : 'down');
      }
      break;
    case 'Escape':
      suggestions.classList.remove('show');
      break;
  }
}


function handleInput(e) {
  const input = e.target.value.trim();
  if (input.length > 0) {
    showSuggestions(input);
  } else {
    suggestions.classList.remove('show');
  }
}

function showSuggestions(input) {
  const matches = Object.keys(commands).filter(cmd => 
    cmd.startsWith(input.toLowerCase())
  );
  
  if (matches.length === 0) {
    // Check for "did you mean"
    const closest = findClosestCommand(input);
    if (closest) {
      suggestions.innerHTML = `
        <div class="suggestion-item" onclick="useSuggestion('${closest}')">
          Did you mean: <strong>${closest}</strong>?
        </div>
      `;
      suggestions.classList.add('show');
    } else {
      suggestions.classList.remove('show');
    }
    return;
  }
  
  suggestions.innerHTML = matches.map((cmd, index) => `
    <div class="suggestion-item ${index === 0 ? 'selected' : ''}" 
         onclick="useSuggestion('${cmd}')"
         data-index="${index}">
      <strong>${cmd}</strong>
      <span class="suggestion-desc">${commands[cmd].desc}</span>
    </div>
  `).join('');
  
  suggestions.classList.add('show');
  currentSuggestionIndex = 0;
}


function findClosestCommand(input) {
  let minDistance = Infinity;
  let closest = null;
  
  Object.keys(commands).forEach(cmd => {
    const distance = levenshteinDistance(input.toLowerCase(), cmd);
    if (distance < minDistance && distance <= 3) {
      minDistance = distance;
      closest = cmd;
    }
  });
  
  return closest;
}

function levenshteinDistance(a, b) {
  const matrix = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[b.length][a.length];
}


function useSuggestion(cmd) {
  commandInput.value = cmd;
  suggestions.classList.remove('show');
  commandInput.focus();
}

function handleTabComplete() {
  const input = commandInput.value.trim();
  const matches = Object.keys(commands).filter(cmd => 
    cmd.startsWith(input.toLowerCase())
  );
  
  if (matches.length === 1) {
    commandInput.value = matches[0];
  } else if (matches.length > 1) {
    showSuggestions(input);
  }
}

function navigateSuggestions(direction) {
  const items = suggestions.querySelectorAll('.suggestion-item');
  if (items.length === 0) return;
  
  items[currentSuggestionIndex].classList.remove('selected');
  
  if (direction === 'up') {
    currentSuggestionIndex = (currentSuggestionIndex - 1 + items.length) % items.length;
  } else {
    currentSuggestionIndex = (currentSuggestionIndex + 1) % items.length;
  }
  
  items[currentSuggestionIndex].classList.add('selected');
}

function navigateHistory(direction) {
  if (commandHistory.length === 0) return;
  
  if (direction === 'up') {
    historyIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
  } else {
    historyIndex = Math.max(historyIndex - 1, -1);
  }
  
  commandInput.value = historyIndex >= 0 ? commandHistory[historyIndex] : '';
}


function executeCommand() {
  const input = commandInput.value.trim();
  if (!input) return;
  
  // Add to history
  commandHistory.unshift(input);
  historyIndex = -1;
  
  // Echo command
  printOutput(`visitor@amine:~$ ${input}`, 'command-echo');
  
  // Parse command
  const parts = input.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);
  
  // Execute
  if (commands[cmd]) {
    commands[cmd].exec(args);
  } else {
    const closest = findClosestCommand(cmd);
    if (closest) {
      printOutput(`Command not found: ${cmd}`, 'error');
      printOutput(`Did you mean: ${closest}?`, 'warning');
    } else {
      printOutput(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
    }
  }
  
  // Clear input
  commandInput.value = '';
  suggestions.classList.remove('show');
  
  // Scroll to bottom
  output.scrollTop = output.scrollHeight;
}

function printOutput(text, className = 'info') {
  const line = document.createElement('div');
  line.className = `output-line ${className}`;
  line.innerHTML = text;
  output.appendChild(line);
}


// Command Implementations
function showHelp(args) {
  if (args.length > 0) {
    const cmd = args[0].toLowerCase();
    if (commands[cmd]) {
      printOutput(`<div class="section-header">${cmd}</div>`, 'info');
      printOutput(`Description: ${commands[cmd].desc}`, 'info');
      printOutput(`Usage: ${commands[cmd].usage}`, 'info');
    } else {
      printOutput(`Unknown command: ${cmd}`, 'error');
    }
    return;
  }
  
  printOutput('<div class="section-header">Available Commands</div>', 'info');
  printOutput('<div class="help-table">', 'info');
  Object.keys(commands).forEach(cmd => {
    printOutput(`
      <div class="help-row">
        <div class="help-command">${cmd}</div>
        <div class="help-desc">${commands[cmd].desc}</div>
      </div>
    `, 'info');
  });
  printOutput('</div>', 'info');
}

function showAbout() {
  const { name, title, location, bio } = portfolioData.about;
  printOutput('<div class="section-header">About Me</div>', 'info');
  printOutput(`<div class="project-title">${name}</div>`, 'success');
  printOutput(`<strong>Title:</strong> ${title}`, 'info');
  printOutput(`<strong>Location:</strong> ${location}`, 'info');
  printOutput(`<br>${bio}`, 'info');
}


function showSkills(args) {
  printOutput('<div class="section-header">Technical Skills</div>', 'info');
  
  const categories = args.length > 0 ? [args[0]] : Object.keys(portfolioData.skills);
  
  categories.forEach(category => {
    if (portfolioData.skills[category]) {
      printOutput(`<br><strong class="project-title">${category.toUpperCase()}</strong>`, 'success');
      portfolioData.skills[category].forEach(skill => {
        const bar = '█'.repeat(Math.floor(skill.level / 5)) + '░'.repeat(20 - Math.floor(skill.level / 5));
        printOutput(`${skill.name.padEnd(25)} ${bar} ${skill.level}%`, 'info');
      });
    }
  });
}

function showProjects(args) {
  printOutput('<div class="section-header">Projects</div>', 'info');
  
  // Check for --detail flag
  const detailIndex = args.indexOf('--detail');
  if (detailIndex !== -1 && args[detailIndex + 1]) {
    const projectId = args[detailIndex + 1];
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (project) {
      showProjectDetail(project);
      return;
    }
  }
  
  portfolioData.projects.forEach((project, index) => {
    printOutput(`
      <div class="project-item">
        <div class="project-title">${index + 1}. ${project.name}</div>
        <div>${project.description}</div>
        <div>
          ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join(' ')}
        </div>
        <div style="margin-top: 5px;">
          <a href="${project.github}" target="_blank" style="color: var(--prompt-color)">GitHub</a> | 
          <a href="${project.demo}" target="_blank" style="color: var(--prompt-color)">Demo</a> |
          <span style="color: var(--warning-color); cursor: pointer;" onclick="executeCommandFromOutput('projects --detail ${project.id}')">Details</span>
        </div>
      </div>
    `, 'info');
  });
}


function showProjectDetail(project) {
  printOutput(`<div class="section-header">${project.name}</div>`, 'info');
  printOutput(`<strong>Description:</strong> ${project.description}`, 'info');
  printOutput(`<br><strong>Technologies:</strong>`, 'info');
  printOutput(project.tech.map(t => `<span class="tech-badge">${t}</span>`).join(' '), 'info');
  printOutput(`<br><strong>Links:</strong>`, 'info');
  printOutput(`GitHub: <a href="${project.github}" target="_blank" style="color: var(--prompt-color)">${project.github}</a>`, 'info');
  printOutput(`Demo: <a href="${project.demo}" target="_blank" style="color: var(--prompt-color)">${project.demo}</a>`, 'info');
}

function showExperience() {
  printOutput('<div class="section-header">Work Experience</div>', 'info');
  
  portfolioData.experience.forEach((exp, index) => {
    printOutput(`
      <div class="experience-item">
        <div class="job-title">${exp.title}</div>
        <div class="company-name">${exp.company} - ${exp.location}</div>
        <div class="date-range">${exp.period}</div>
        <div style="margin-top: 10px;">${exp.description}</div>
        <div style="margin-top: 10px;"><strong>Key Achievements:</strong></div>
        <ul>
          ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    `, 'info');
  });
}

function showEducation() {
  printOutput('<div class="section-header">Education</div>', 'info');
  
  portfolioData.education.forEach(edu => {
    printOutput(`
      <div class="education-item">
        <div class="degree-title">${edu.degree}</div>
        <div class="school-name">${edu.school}</div>
        <div class="date-range">${edu.period}</div>
        <div>GPA: ${edu.gpa}</div>
      </div>
    `, 'info');
  });
  
  printOutput('<br><strong>Certifications:</strong>', 'info');
  portfolioData.certifications.forEach(cert => {
    printOutput(`• ${cert}`, 'success');
  });
}


function showContact() {
  printOutput('<div class="section-header">Contact Information</div>', 'info');
  printOutput(`<strong>Email:</strong> <a href="mailto:${portfolioData.about.email}" style="color: var(--prompt-color)">${portfolioData.about.email}</a>`, 'info');
  printOutput(`<strong>Location:</strong> ${portfolioData.about.location}`, 'info');
  printOutput('<br>Feel free to reach out for opportunities or collaborations!', 'success');
}

function showUpdates() {
  printOutput('<div class="section-header">Latest Updates</div>', 'info');
  
  portfolioData.updates.forEach(update => {
    printOutput(`
      <div class="update-item">
        <span style="color: var(--warning-color)">[${update.date}]</span>
        <strong style="color: var(--success-color)">${update.title}</strong>
        <div>${update.description}</div>
      </div>
    `, 'info');
  });
}

function showMap() {
  printOutput('<div class="section-header">Location</div>', 'info');
  printOutput('Opening map in new window...', 'success');
  // You can customize coordinates
  const lat = 40.7128;
  const lng = -74.0060;
  window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
}

function clearTerminal() {
  output.innerHTML = '';
  printWelcome();
}

function showAll() {
  showAbout();
  printOutput('<br>', 'info');
  showSkills([]);
  printOutput('<br>', 'info');
  showProjects([]);
  printOutput('<br>', 'info');
  showExperience();
  printOutput('<br>', 'info');
  showEducation();
  printOutput('<br>', 'info');
  showUpdates();
  printOutput('<br>', 'info');
  showContact();
}


// Matrix Effect
function setupMatrix() {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
  });
}

function toggleMatrix() {
  matrixActive = !matrixActive;
  matrixCanvas.classList.toggle('active');
  
  if (matrixActive) {
    startMatrix();
    printOutput('Matrix mode activated! 🟢', 'success');
  } else {
    printOutput('Matrix mode deactivated', 'info');
  }
}

function startMatrix() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const fontSize = 14;
  const columns = matrixCanvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  
  function draw() {
    if (!matrixActive) return;
    
    matrixCtx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    matrixCtx.fillStyle = '#0F0';
    matrixCtx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    
    requestAnimationFrame(draw);
  }
  
  draw();
}


// CV Explorer Functions
function openCVExplorer() {
  document.getElementById('cv-explorer').classList.add('show');
  printOutput('Opening CV Explorer...', 'success');
}

function closeCVExplorer() {
  document.getElementById('cv-explorer').classList.remove('show');
}

function openCVSection(section) {
  const content = document.getElementById('cv-content');
  
  switch(section) {
    case 'experience':
      content.innerHTML = '<div class="cv-section"><h2>Work Experience</h2>' +
        portfolioData.experience.map(exp => `
          <div class="experience-item">
            <div class="job-title">${exp.title}</div>
            <div class="company-name">${exp.company} - ${exp.location}</div>
            <div class="date-range">${exp.period}</div>
            <p>${exp.description}</p>
            <strong>Achievements:</strong>
            <ul>${exp.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        `).join('') + '</div>';
      break;
      
    case 'skills':
      content.innerHTML = '<div class="cv-section"><h2>Technical Skills</h2>' +
        Object.keys(portfolioData.skills).map(category => `
          <div class="skill-category">
            <h4>${category.toUpperCase()}</h4>
            ${portfolioData.skills[category].map(skill => `
              <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                  <span>${skill.name}</span>
                  <span>${skill.level}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-bar-fill" style="width: ${skill.level}%">${skill.name}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('') + '</div>';
      break;
      
    case 'education':
      content.innerHTML = '<div class="cv-section"><h2>Education & Certifications</h2>' +
        portfolioData.education.map(edu => `
          <div class="education-item">
            <div class="degree-title">${edu.degree}</div>
            <div class="school-name">${edu.school}</div>
            <div class="date-range">${edu.period}</div>
            <p>GPA: ${edu.gpa}</p>
          </div>
        `).join('') +
        '<h3 style="margin-top: 30px; color: var(--prompt-color)">Certifications</h3>' +
        '<ul>' + portfolioData.certifications.map(cert => `<li>${cert}</li>`).join('') + '</ul>' +
        '</div>';
      break;
      
    case 'projects':
      content.innerHTML = '<div class="cv-section"><h2>Projects</h2>' +
        portfolioData.projects.map(project => `
          <div class="project-item">
            <div class="project-title">${project.name}</div>
            <p>${project.description}</p>
            <div>${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join(' ')}</div>
            <div style="margin-top: 10px;">
              <a href="${project.github}" target="_blank">GitHub</a> | 
              <a href="${project.demo}" target="_blank">Demo</a>
            </div>
          </div>
        `).join('') + '</div>';
      break;
      
    case 'certifications':
      content.innerHTML = '<div class="cv-section"><h2>Certifications</h2><ul>' +
        portfolioData.certifications.map(cert => `<li style="margin: 10px 0;">${cert}</li>`).join('') +
        '</ul></div>';
      break;
  }
}


// Recruiter Smart Search
function closeRecruiterPanel() {
  document.getElementById('recruiter-panel').classList.remove('show');
}

function analyzeJobMatch() {
  const jobDesc = document.getElementById('job-description').value.toLowerCase();
  if (!jobDesc.trim()) {
    alert('Please paste a job description first!');
    return;
  }
  
  // Extract skills from job description
  const allSkills = [];
  Object.values(portfolioData.skills).forEach(category => {
    category.forEach(skill => allSkills.push(skill.name.toLowerCase()));
  });
  
  // Calculate matches
  const matchedSkills = allSkills.filter(skill => 
    jobDesc.includes(skill.toLowerCase())
  );
  
  const matchPercentage = Math.round((matchedSkills.length / allSkills.length) * 100);
  
  // Analyze experience
  const experienceYears = portfolioData.experience.length * 2; // Rough estimate
  const hasRelevantExp = portfolioData.experience.some(exp => 
    jobDesc.includes(exp.title.toLowerCase()) || 
    exp.description.toLowerCase().split(' ').some(word => jobDesc.includes(word))
  );
  
  // Generate report
  const resultDiv = document.getElementById('match-result');
  const scoreClass = matchPercentage >= 70 ? 'match-high' : matchPercentage >= 50 ? 'match-medium' : 'match-low';
  
  resultDiv.innerHTML = `
    <h3>Match Analysis Report</h3>
    <div class="match-score ${scoreClass}">${matchPercentage}%</div>
    <div class="match-details">
      <div class="match-section">
        <strong>Skills Match:</strong>
        <p>Found ${matchedSkills.length} matching skills out of ${allSkills.length} total skills</p>
        <p><strong>Matched Skills:</strong> ${matchedSkills.join(', ') || 'None'}</p>
      </div>
      <div class="match-section">
        <strong>Experience:</strong>
        <p>${experienceYears}+ years of relevant experience</p>
        <p>${hasRelevantExp ? '✓ Has directly relevant experience' : '⚠ May need to review experience details'}</p>
      </div>
      <div class="match-section">
        <strong>Recommendation:</strong>
        <p class="${scoreClass}">
          ${matchPercentage >= 70 ? '✓ Excellent match! Highly recommended for interview.' :
            matchPercentage >= 50 ? '⚠ Good match. Consider for interview with skill assessment.' :
            '✗ Limited match. May not be ideal for this specific role.'}
        </p>
      </div>
      <div class="match-section">
        <strong>Next Steps:</strong>
        <ul>
          <li>Review full CV using the CV Explorer</li>
          <li>Check project portfolio for relevant work</li>
          <li>Contact: ${portfolioData.about.email}</li>
        </ul>
      </div>
    </div>
  `;
  
  resultDiv.classList.add('show');
}


// Helper function to execute commands from output links
function executeCommandFromOutput(cmd) {
  commandInput.value = cmd;
  executeCommand();
}

// Make it globally accessible
window.executeCommandFromOutput = executeCommandFromOutput;
window.openCVSection = openCVSection;
window.closeCVExplorer = closeCVExplorer;
window.closeRecruiterPanel = closeRecruiterPanel;
window.analyzeJobMatch = analyzeJobMatch;
window.useSuggestion = useSuggestion;

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
