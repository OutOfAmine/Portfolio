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
const experiences_left=document.querySelectorAll('.row-1')
for (let i = 0; i < experiences_left.length; i++) {
experiences_left[i]
gsap.fromTo(experiences_left[i],{x:-300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:experiences_left[i],start:'top center'}})
}
const experiences_right=document.querySelectorAll('.row-2')
for (let i = 0; i < experiences_right.length; i++) {
experiences_right[i]
gsap.fromTo(experiences_right[i],{x:+300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:experiences_right[i],start:'top center'}})
}
