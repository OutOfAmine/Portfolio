const translations={en:{name:"Amine",nav:{home:"Home",about:"About",skills:"Skills",projects:"Projects",experience:"Experience",contact:"Contact"},hero:{greeting:"Hi, I'm Amine",title:"Full Stack Developer",description:"Building modern web applications with clean code and great UX",hire:"Hire Me",work:"View Work"},about:{title:"About Me",lead:"Passionate developer with 5+ years of experience building scalable web applications.",description:"I specialize in modern JavaScript frameworks, cloud architecture, and creating seamless user experiences.",projects:"Projects",years:"Years",clients:"Clients"},skills:{title:"Technical Skills",frontend:"Frontend",backend:"Backend",tools:"Tools & Cloud"},projects:{title:"Featured Projects",project1:{title:"E-Commerce Platform",description:"Full-stack e-commerce solution with React, Node.js, and MongoDB"},project2:{title:"ML Pipeline",description:"Machine learning pipeline for predictive analytics"},project3:{title:"Task Manager App",description:"Native Android app with offline-first architecture"}},experience:{title:"Work Experience",job1:{title:"Senior Full Stack Developer",company:"Tech Company Inc.",description:"Leading development of microservices architecture"},job2:{title:"Full Stack Developer",company:"Startup XYZ",description:"Developed multiple web applications"}},contact:{title:"Get In Touch",name:"Your Name",email:"Your Email",subject:"Subject",message:"Message",send:"Send Message",emailLabel:"Email",location:"Location"},footer:{rights:"All rights reserved",devHint:"Press Ctrl+Shift+D for Developer Mode"}},fr:{name:"Amine",nav:{home:"Accueil",about:"À propos",skills:"Compétences",projects:"Projets",experience:"Expérience",contact:"Contact"},hero:{greeting:"Salut, je suis Amine",title:"Développeur Full Stack",description:"Création d'applications web modernes avec du code propre et une excellente UX",hire:"Embauchez-moi",work:"Voir le travail"},about:{title:"À propos de moi",lead:"Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web évolutives.",description:"Je me spécialise dans les frameworks JavaScript modernes, l'architecture cloud et la création d'expériences utilisateur fluides.",projects:"Projets",years:"Années",clients:"Clients"},skills:{title:"Compétences techniques",frontend:"Frontend",backend:"Backend",tools:"Outils & Cloud"},projects:{title:"Projets en vedette",project1:{title:"Plateforme E-Commerce",description:"Solution e-commerce complète avec React, Node.js et MongoDB"},project2:{title:"Pipeline ML",description:"Pipeline d'apprentissage automatique pour l'analyse prédictive"},project3:{title:"Application de gestion",description:"Application Android native avec architecture offline-first"}},experience:{title:"Expérience professionnelle",job1:{title:"Développeur Full Stack Senior",company:"Tech Company Inc.",description:"Direction du développement de l'architecture microservices"},job2:{title:"Développeur Full Stack",company:"Startup XYZ",description:"Développement de plusieurs applications web"}},contact:{title:"Contactez-moi",name:"Votre nom",email:"Votre email",subject:"Sujet",message:"Message",send:"Envoyer",emailLabel:"Email",location:"Localisation"},footer:{rights:"Tous droits réservés",devHint:"Appuyez sur Ctrl+Shift+D pour le mode développeur"}},ar:{name:"أمين",nav:{home:"الرئيسية",about:"عني",skills:"المهارات",projects:"المشاريع",experience:"الخبرة",contact:"اتصل"},hero:{greeting:"مرحباً، أنا أمين",title:"مطور Full Stack",description:"بناء تطبيقات ويب حديثة بكود نظيف وتجربة مستخدم رائعة",hire:"وظفني",work:"عرض الأعمال"},about:{title:"عني",lead:"مطور شغوف مع أكثر من 5 سنوات من الخبرة في بناء تطبيقات ويب قابلة للتطوير.",description:"أتخصص في أطر عمل JavaScript الحديثة، وبنية السحابة، وإنشاء تجارب مستخدم سلسة.",projects:"المشاريع",years:"سنوات",clients:"العملاء"},skills:{title:"المهارات التقنية",frontend:"الواجهة الأمامية",backend:"الواجهة الخلفية",tools:"الأدوات والسحابة"},projects:{title:"المشاريع المميزة",project1:{title:"منصة التجارة الإلكترونية",description:"حل تجارة إلكترونية كامل مع React و Node.js و MongoDB"},project2:{title:"خط أنابيب ML",description:"خط أنابيب التعلم الآلي للتحليلات التنبؤية"},project3:{title:"تطبيق إدارة المهام",description:"تطبيق Android أصلي مع بنية offline-first"}},experience:{title:"الخبرة العملية",job1:{title:"مطور Full Stack أول",company:"Tech Company Inc.",description:"قيادة تطوير بنية الخدمات الصغيرة"},job2:{title:"مطور Full Stack",company:"Startup XYZ",description:"تطوير تطبيقات ويب متعددة"}},contact:{title:"تواصل معي",name:"اسمك",email:"بريدك الإلكتروني",subject:"الموضوع",message:"الرسالة",send:"إرسال",emailLabel:"البريد الإلكتروني",location:"الموقع"},footer:{rights:"جميع الحقوق محفوظة",devHint:"اضغط Ctrl+Shift+D لوضع المطور"}}};

let currentLang='en';
const setLanguage=lang=>{currentLang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.getAttribute('data-i18n');const keys=key.split('.');let value=translations[lang];keys.forEach(k=>value=value?.[k]);if(value)el.textContent=value})};

const particlesCanvas=document.getElementById('particles-bg');
const particlesCtx=particlesCanvas.getContext('2d');
const matrixCanvas=document.getElementById('matrix-bg');
const matrixCtx=matrixCanvas.getContext('2d');
const bubblesCanvas=document.getElementById('bubbles-bg');
const bubblesCtx=bubblesCanvas.getContext('2d');

const resizeCanvas=()=>{particlesCanvas.width=window.innerWidth;particlesCanvas.height=window.innerHeight;matrixCanvas.width=window.innerWidth;matrixCanvas.height=window.innerHeight;bubblesCanvas.width=window.innerWidth;bubblesCanvas.height=window.innerHeight};
resizeCanvas();
window.addEventListener('resize',resizeCanvas);

const particles=[];
for(let i=0;i<50;i++){particles.push({x:Math.random()*particlesCanvas.width,y:Math.random()*particlesCanvas.height,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5,radius:Math.random()*2+1})}

const animateParticles=()=>{particlesCtx.clearRect(0,0,particlesCanvas.width,particlesCanvas.height);const theme=document.documentElement.getAttribute('data-theme');particlesCtx.fillStyle=theme==='dark'?'rgba(99,102,241,0.5)':'rgba(99,102,241,0.3)';particlesCtx.strokeStyle=theme==='dark'?'rgba(99,102,241,0.2)':'rgba(99,102,241,0.1)';particles.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>particlesCanvas.width)p.vx*=-1;if(p.y<0||p.y>particlesCanvas.height)p.vy*=-1;particlesCtx.beginPath();particlesCtx.arc(p.x,p.y,p.radius,0,Math.PI*2);particlesCtx.fill();particles.forEach((p2,j)=>{if(i!==j){const dx=p.x-p2.x;const dy=p.y-p2.y;const dist=Math.sqrt(dx*dx+dy*dy);if(dist<100){particlesCtx.beginPath();particlesCtx.moveTo(p.x,p.y);particlesCtx.lineTo(p2.x,p2.y);particlesCtx.stroke()}}})});requestAnimationFrame(animateParticles)};
animateParticles();

let matrixActive=false;
const matrixChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize=14;
let columns=Math.floor(matrixCanvas.width/fontSize);
let drops=Array(columns).fill(1);

const drawMatrix=()=>{if(!matrixActive)return;matrixCtx.fillStyle='rgba(0,0,0,0.05)';matrixCtx.fillRect(0,0,matrixCanvas.width,matrixCanvas.height);matrixCtx.fillStyle='#0F0';matrixCtx.font=fontSize+'px monospace';for(let i=0;i<drops.length;i++){const text=matrixChars[Math.floor(Math.random()*matrixChars.length)];matrixCtx.fillText(text,i*fontSize,drops[i]*fontSize);if(drops[i]*fontSize>matrixCanvas.height&&Math.random()>0.975)drops[i]=0;drops[i]++}requestAnimationFrame(drawMatrix)};

document.getElementById('matrix-btn').addEventListener('click',()=>{matrixActive=!matrixActive;matrixCanvas.classList.toggle('active');if(matrixActive){columns=Math.floor(matrixCanvas.width/fontSize);drops=Array(columns).fill(1);drawMatrix()}});

let oceanActive=false;
const bubbles=[];
for(let i=0;i<30;i++){bubbles.push({x:Math.random()*bubblesCanvas.width,y:bubblesCanvas.height+Math.random()*200,radius:Math.random()*4+2,speed:Math.random()*1+0.5,opacity:Math.random()*0.5+0.3,wobble:Math.random()*2})}

const animateBubbles=()=>{if(!oceanActive)return;bubblesCtx.clearRect(0,0,bubblesCanvas.width,bubblesCanvas.height);const theme=document.documentElement.getAttribute('data-theme');bubblesCtx.fillStyle=theme==='dark'?'rgba(139,92,246,0.4)':'rgba(99,102,241,0.3)';bubbles.forEach(b=>{b.y-=b.speed;b.x+=Math.sin(b.y*0.01)*b.wobble;if(b.y<-50){b.y=bubblesCanvas.height+50;b.x=Math.random()*bubblesCanvas.width}bubblesCtx.globalAlpha=b.opacity;bubblesCtx.beginPath();bubblesCtx.arc(b.x,b.y,b.radius,0,Math.PI*2);bubblesCtx.fill()});bubblesCtx.globalAlpha=1;requestAnimationFrame(animateBubbles)};

document.getElementById('ocean-btn').addEventListener('click',()=>{oceanActive=!oceanActive;bubblesCanvas.classList.toggle('active');document.querySelector('.ocean-overlay').classList.toggle('active');document.body.classList.toggle('ocean-mode');if(oceanActive)animateBubbles()});

document.getElementById('theme-btn').addEventListener('click',()=>{const current=document.documentElement.getAttribute('data-theme');document.documentElement.setAttribute('data-theme',current==='dark'?'light':'dark');localStorage.setItem('theme',current==='dark'?'light':'dark')});

const savedTheme=localStorage.getItem('theme');
if(savedTheme)document.documentElement.setAttribute('data-theme',savedTheme);
else if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.setAttribute('data-theme','dark');

const langBtn=document.getElementById('lang-btn');
const langDropdown=document.getElementById('lang-dropdown');
langBtn.addEventListener('click',e=>{e.stopPropagation();langDropdown.classList.toggle('show')});
document.addEventListener('click',()=>langDropdown.classList.remove('show'));
langDropdown.addEventListener('click',e=>e.stopPropagation());
langDropdown.querySelectorAll('button').forEach(btn=>{btn.addEventListener('click',()=>{setLanguage(btn.getAttribute('data-lang'));langDropdown.classList.remove('show');localStorage.setItem('lang',btn.getAttribute('data-lang'))})});

const savedLang=localStorage.getItem('lang');
if(savedLang)setLanguage(savedLang);

const mobileMenuBtn=document.getElementById('mobile-menu-btn');
const navMenu=document.getElementById('nav-menu');
mobileMenuBtn.addEventListener('click',()=>{mobileMenuBtn.classList.toggle('active');navMenu.classList.toggle('active')});
navMenu.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>{mobileMenuBtn.classList.remove('active');navMenu.classList.remove('active')})});

const observerOptions={threshold:0.15,rootMargin:'0px 0px -50px 0px'};
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},observerOptions);

document.querySelectorAll('.animate-fade-in,.animate-slide-left,.animate-slide-right,.animate-scale').forEach(el=>observer.observe(el));

let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{const scrolled=window.pageYOffset;document.querySelectorAll('.scroll-parallax').forEach((el,i)=>{const speed=0.5+i*0.1;el.style.transform=`translateY(${scrolled*speed*0.1}px)`});ticking=false});ticking=true}});

const skillObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll('.skill-fill').forEach(fill=>{const width=fill.getAttribute('data-width');setTimeout(()=>fill.style.width=width+'%',100)});skillObserver.unobserve(entry.target)}})},{threshold:0.5});

const skillsSection=document.getElementById('skills');
if(skillsSection)skillObserver.observe(skillsSection);

const statObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll('.stat-number').forEach(stat=>{const target=parseInt(stat.getAttribute('data-count'));let current=0;const increment=target/50;const timer=setInterval(()=>{current+=increment;if(current>=target){stat.textContent=target+'+';clearInterval(timer)}else{stat.textContent=Math.floor(current)+'+'}},30)});statObserver.unobserve(entry.target)}})},{threshold:0.5});

const aboutSection=document.getElementById('about');
if(aboutSection)statObserver.observe(aboutSection);

const contactForm=document.getElementById('contact-form');
const formStatus=document.getElementById('form-status');
contactForm.addEventListener('submit',async e=>{e.preventDefault();const formData={name:document.getElementById('name').value,email:document.getElementById('email').value,subject:document.getElementById('subject').value,message:document.getElementById('message').value};formStatus.textContent='Sending...';formStatus.className='';formStatus.style.display='block';try{const response=await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(formData)});if(response.ok){formStatus.textContent='✓ Message sent successfully!';formStatus.className='success';contactForm.reset()}else{throw new Error('Failed')}}catch(error){formStatus.textContent='✗ Failed to send. Please try again.';formStatus.className='error'}setTimeout(()=>formStatus.style.display='none',5000)});

const devConsole=document.getElementById('dev-console');
const devOutput=document.getElementById('dev-output');
const devInput=document.getElementById('dev-input');
const devSuggestions=document.getElementById('dev-suggestions');
const devClose=document.getElementById('dev-close');

const devCommands={help:{desc:'Show available commands',exec:()=>'Available commands: help, about, skills, projects, clear, theme, lang, exit'},about:{desc:'About me',exec:()=>'Amine - Full Stack Developer with 5+ years experience'},skills:{desc:'Technical skills',exec:()=>'JavaScript, TypeScript, React, Angular, Node.js, Python, Docker, AWS'},projects:{desc:'List projects',exec:()=>'1. E-Commerce Platform\n2. ML Pipeline\n3. Task Manager App'},clear:{desc:'Clear console',exec:()=>{devOutput.innerHTML='';return'Console cleared'}},theme:{desc:'Toggle theme',exec:()=>{document.getElementById('theme-btn').click();return'Theme toggled'}},lang:{desc:'Change language (en/fr/ar)',exec:args=>{const lang=args[0];if(['en','fr','ar'].includes(lang)){setLanguage(lang);return`Language changed to ${lang}`}return'Usage: lang [en|fr|ar]'}},exit:{desc:'Close console',exec:()=>{devConsole.classList.remove('show');return'Goodbye!'}}};

let devHistory=[];
let devHistoryIndex=-1;

const printDev=(text,className='')=>{const line=document.createElement('div');line.className=`dev-line ${className}`;line.textContent=text;devOutput.appendChild(line);devOutput.scrollTop=devOutput.scrollHeight};

const executeDev=cmd=>{const parts=cmd.trim().split(' ');const command=parts[0].toLowerCase();const args=parts.slice(1);printDev(`$ ${cmd}`,'dev-command');if(devCommands[command]){const result=devCommands[command].exec(args);printDev(result,'dev-success')}else{const closest=Object.keys(devCommands).find(c=>c.startsWith(command.substring(0,3)));if(closest)printDev(`Command not found. Did you mean: ${closest}?`,'dev-error');else printDev('Command not found. Type "help" for available commands.','dev-error')}};

devInput.addEventListener('keydown',e=>{if(e.key==='Enter'){const cmd=devInput.value.trim();if(cmd){devHistory.unshift(cmd);devHistoryIndex=-1;executeDev(cmd);devInput.value='';devSuggestions.classList.remove('show')}}else if(e.key==='ArrowUp'){e.preventDefault();if(devHistory.length>0){devHistoryIndex=Math.min(devHistoryIndex+1,devHistory.length-1);devInput.value=devHistory[devHistoryIndex]}}else if(e.key==='ArrowDown'){e.preventDefault();if(devHistoryIndex>0){devHistoryIndex--;devInput.value=devHistory[devHistoryIndex]}else{devHistoryIndex=-1;devInput.value=''}}else if(e.key==='Tab'){e.preventDefault();const input=devInput.value.toLowerCase();const matches=Object.keys(devCommands).filter(c=>c.startsWith(input));if(matches.length===1)devInput.value=matches[0]}});

devInput.addEventListener('input',e=>{const input=e.target.value.toLowerCase();if(input.length>0){const matches=Object.keys(devCommands).filter(c=>c.startsWith(input));if(matches.length>0){devSuggestions.innerHTML=matches.map(c=>`<div class="dev-suggestion">${c} - ${devCommands[c].desc}</div>`).join('');devSuggestions.classList.add('show');devSuggestions.querySelectorAll('.dev-suggestion').forEach(s=>{s.addEventListener('click',()=>{devInput.value=s.textContent.split(' - ')[0];devSuggestions.classList.remove('show');devInput.focus()})})}else{devSuggestions.classList.remove('show')}}else{devSuggestions.classList.remove('show')}});

devClose.addEventListener('click',()=>devConsole.classList.remove('show'));

document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.key==='D'){e.preventDefault();devConsole.classList.toggle('show');if(devConsole.classList.contains('show')){devInput.focus();if(devOutput.children.length===0){printDev('Developer Console v1.0','dev-success');printDev('Type "help" for available commands','');}}}});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',e=>{e.preventDefault();const target=document.querySelector(anchor.getAttribute('href'));if(target)target.scrollIntoView({behavior:'smooth',block:'start'})})});

const navbar=document.getElementById('navbar');
let lastScroll=0;
window.addEventListener('scroll',()=>{const currentScroll=window.pageYOffset;if(currentScroll>50){navbar.style.boxShadow='0 2px 20px rgba(0,0,0,0.1)'}else{navbar.style.boxShadow='none'}lastScroll=currentScroll});

const recruiterModal=document.getElementById('recruiter-modal');
const recruiterBtn=document.getElementById('recruiter-btn');
const recruiterClose=document.getElementById('recruiter-close');
const modalOverlay=document.getElementById('modal-overlay');
const analyzeBtn=document.getElementById('analyze-btn');
const jobDescription=document.getElementById('job-description');
const matchResult=document.getElementById('match-result');

recruiterBtn.addEventListener('click',()=>recruiterModal.classList.add('show'));
recruiterClose.addEventListener('click',()=>recruiterModal.classList.remove('show'));
modalOverlay.addEventListener('click',()=>recruiterModal.classList.remove('show'));

const portfolioSkills=['javascript','typescript','react','angular','vue','node.js','nodejs','python','java','kotlin','html','css','sass','scss','sql','mongodb','postgresql','mysql','docker','kubernetes','k8s','aws','azure','gcp','cloud','git','github','gitlab','ci/cd','cicd','agile','scrum','rest','api','graphql','redux','express','django','flask','spring','microservices','serverless','lambda','terraform','jenkins','webpack','babel','jest','testing','tdd','responsive','mobile','pwa','seo','accessibility','a11y','performance','optimization','security','authentication','oauth','jwt','websocket','redis','elasticsearch','rabbitmq','kafka','nginx','linux','bash','shell','devops','monitoring','logging','analytics'];

const portfolioExperience={years:5,roles:['senior full stack developer','full stack developer','software engineer'],companies:['tech company','startup'],achievements:['microservices','architecture','team lead','mentoring','ci/cd','performance optimization','scalability']};

analyzeBtn.addEventListener('click',()=>{const jobText=jobDescription.value.toLowerCase().trim();if(!jobText){matchResult.innerHTML='<p style="color:var(--error);text-align:center;padding:2rem">Please paste a job description first!</p>';matchResult.classList.add('show');return}const words=jobText.split(/\s+/);const matchedSkills=portfolioSkills.filter(skill=>jobText.includes(skill));const uniqueMatched=[...new Set(matchedSkills)];const experienceMatch=words.some(w=>w.includes('year'))&&words.some(w=>parseInt(w)<=portfolioExperience.years);const roleMatch=portfolioExperience.roles.some(role=>jobText.includes(role));const skillScore=Math.min((uniqueMatched.length/15)*100,100);const expScore=experienceMatch?100:50;const roleScore=roleMatch?100:70;const totalScore=Math.round((skillScore*0.5)+(expScore*0.3)+(roleScore*0.2));let scoreClass,recommendation,emoji;if(totalScore>=80){scoreClass='match-high';recommendation='Excellent match! I have strong experience with the required technologies and would be a great fit for this role. My background aligns perfectly with your needs.';emoji='✅'}else if(totalScore>=60){scoreClass='match-medium';recommendation='Good match! I have experience with many of the required skills and am quick to learn new technologies. I believe I can contribute effectively to your team.';emoji='⚠️'}else{scoreClass='match-low';recommendation='Partial match. While I may not have all the specific technologies listed, I have strong fundamentals and adapt quickly to new tech stacks.';emoji='ℹ️'}matchResult.innerHTML=`<div class="match-score"><span class="match-percentage ${scoreClass}">${totalScore}%</span><span class="match-label">Match Score</span></div><div class="match-details"><div class="match-section"><h4>📊 Matched Skills (${uniqueMatched.length})</h4><div>${uniqueMatched.length>0?uniqueMatched.slice(0,20).map(s=>`<span class="skill-match">${s}</span>`).join(''):'<p>Please provide more technical details in the job description</p>'}</div></div><div class="match-section"><h4>💼 Experience Analysis</h4><p><strong>Years of Experience:</strong> ${portfolioExperience.years}+ years</p><p><strong>Relevant Roles:</strong> ${portfolioExperience.roles.join(', ')}</p><p><strong>Key Achievements:</strong> ${portfolioExperience.achievements.slice(0,5).join(', ')}</p></div><div class="recommendation-box"><h4>${emoji} Recommendation</h4><p class="${scoreClass}">${recommendation}</p></div><div class="match-section"><h4>📋 Next Steps</h4><ul><li>Review my full portfolio and projects above</li><li>Check my GitHub for code samples and contributions</li><li>Contact me using the form below for interview</li><li>Download my CV for detailed information</li></ul></div><div class="cta-buttons"><a href="#contact" class="btn btn-primary" onclick="document.getElementById('recruiter-modal').classList.remove('show')">Contact Me Now</a><a href="#projects" class="btn btn-secondary" onclick="document.getElementById('recruiter-modal').classList.remove('show')">View Projects</a></div></div>`;matchResult.classList.add('show');matchResult.scrollIntoView({behavior:'smooth',block:'nearest'})});

console.log('%c🚀 Portfolio Loaded','color:#6366f1;font-size:20px;font-weight:bold');
console.log('%cPress Ctrl+Shift+D for Developer Console','color:#8b5cf6;font-size:14px');
console.log('%c🌊 Click ocean button for swimming effect','color:#3b82f6;font-size:14px');
console.log('%c👔 Click recruiter button for job match','color:#8b5cf6;font-size:14px');
