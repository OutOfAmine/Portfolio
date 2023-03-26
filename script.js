var a=true;
function ShowNavMobile() {
    if (a) {
    document.querySelector('.info-container').style.display='none';
    document.querySelector('.nav').style.display='flex';
        a=false
    }
    else{
    document.querySelector('.info-container').style.display='flex';
    document.querySelector('.nav').style.display='none';
        a=true;
    }
}
gsap.registerPlugin(ScrollTrigger)
const experiences=document.querySelectorAll('.row')
let animateRight = true;
for (let i = 0; i < experiences.length; i++) {
if (animateRight) {
    gsap.fromTo(experiences[i],{x:-300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:experiences[i],start:'top center'}})
}
}



