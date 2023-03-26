

// if (window.innerWidth>750) {
//     document.querySelector('.info-container').style.display='flex';
//     document.querySelector('.nav').style.display='flex';
// }
// function ShowNavMobile() {
//             if (a) { 
//                 document.querySelector('.info-container').style.display='none';
//                 document.querySelector('.nav').style.display='flex';
//                     a=false
//         }
//         else{
//             document.querySelector('.info-container').style.display='flex';
//             document.querySelector('.nav').style.display='none';
//                 a=true;
//     }

// }
var a=true;
function ShowNavMobile() {
    var nav = document.querySelector('.nav');
    var infoContainer = document.querySelector('.info-container');
    if (window.innerWidth > 750) {
      nav.style.display = 'flex';
      infoContainer.style.display = 'flex';
    } else {
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
  }
  
  // Add an event listener for the resize event
  window.addEventListener('resize', ShowNavMobile);
gsap.registerPlugin(ScrollTrigger)
const experiences=document.querySelectorAll('.row')
let animateRight = true;
for (let i = 0; i < experiences.length; i++) {
if (animateRight) {
    gsap.fromTo(experiences[i],{x:-300,opacity:0},{x:0,duration:0.8,opacity:1,scrollTrigger:{trigger:experiences[i],start:'top center'}})
}
}



