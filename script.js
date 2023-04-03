
var nav = document.querySelector('.nav');
var infoContainer = document.querySelector('.info-container');
var a = false;



function ShowNavMobile() {
  if (a) {
    infoContainer.style.display = 'flex';
    nav.style.display = 'none';
    a = false;
  } else {
    infoContainer.style.display = 'none';
    nav.style.display = 'flex';
    a = true;
  }
}

function ShowAll() {
  if (window.innerWidth > 750) {
    nav.style.display = 'flex';
    infoContainer.style.display = 'flex';
  } else {
    nav.style.display = 'none';
    infoContainer.style.display = 'flex';
    a=false
  }
}
window.addEventListener('resize', ShowAll);
gsap.registerPlugin(ScrollTrigger)
const experiences=document.querySelectorAll('.row')
let animateRight = true;
for (let i = 0; i < experiences.length; i++) {
if (animateRight) {
    gsap.fromTo(experiences[i],{x:-300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:experiences[i],start:'top center'}})
}
}
const cart_skills=document.querySelectorAll('.skills-container')
const education=document.querySelectorAll('.education')
const text_container=document.querySelectorAll('.text-container')
const pourcentage=document.querySelectorAll('.pourcentage-skills')
for (let i = 0; i < education.length; i++) {
    gsap.fromTo(education[i],{x:-300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:education[i],start:'top center'}})
}
for (let i = 0; i < cart_skills.length; i++) {
  gsap.fromTo(cart_skills[i],{x:-300,opacity:0,y:-300},{x:0,y:0,duration:0.8,opacity:1,scrollTrigger:{trigger:cart_skills[i],start:'top center'}})
}
for (let i = 0; i < text_container.length; i++) {
  gsap.fromTo(text_container[i],{x:-300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:text_container[i],start:'top center'}})
}
for (let i = 0; i < pourcentage.length; i++) {
  gsap.fromTo(pourcentage[i],{y:-300,opacity:0},{y:0,duration:0.8,opacity:1,scrollTrigger:{trigger:pourcentage[i],start:'top center'}})
}
var v=true
function ShowMore() {
  if (v) {
    document.getElementById('paragraph').innerHTML=`Animer, superviser et encadrer une équipe,
    diriger la planification stratégique de l'entreprise et élaboration de plans,
    diriger une équipe de consultants et de formateurs pour fournir des solutions de qualité supérieure aux clients,
    développer de nouveaux partenariats stratégiques avec des entreprises clientes,
    rédiger et fournir des expertises judiciaires,
    gérer les risques et les situations conflictuelles,et
    les systèmes CRM-HRM- ERP`;
    v=false
  }else{
    document.getElementById('paragraph').innerHTML=`Animer, superviser et encadrer une équipe,
    diriger la planification stratégique de l'entreprise et élaboration de plans,
    diriger une équipe de consultants et de formateurs pour fournir des solutions de qualité...`;
    v=true
  }
}



