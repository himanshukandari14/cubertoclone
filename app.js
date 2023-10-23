var tl=gsap.timeline()
const workbtnblack=document.querySelector('#workbtnblack')
const menu=document.querySelector('#menu');
const whitemenu=document.querySelector('#whitemenu');
const blackmenu=document.querySelector('#blackmenu');
const btndiv=document.querySelector('#btndiv');
const card=document.querySelectorAll('.card');

const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 55,
    skewingIcon: 55,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});

// efect on menu btn
menu.addEventListener("mouseover",()=>{
     blackmenu.style.display="none";
     whitemenu.style.display="block";
})
menu.addEventListener("mouseout",()=>{
    whitemenu.style.display="none";
    blackmenu.style.display="block";
})

// event handling for cards
// event handling for cards
card.forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseover', () => {
        video.play();
    });
    card.addEventListener('mouseout', () => {
        video.pause();
    });
});


// work btn
// GSAP animation on hover
        const workbtn = document.querySelector("#workbtn");

        workbtn.addEventListener('mouseover', () => {
            gsap.to(workbtn, {
                duration: 0.1,
                scaleX: 1.3,
                // scaleY: 1.9,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
        });
// gsap animations
tl.from("nav",{

    opacity:0,
    duration:1.1,
    delay:0.5
})
tl.from("#leftsidenav h1,#leftsidenav span",{
    opacity:0,
    y:50,
    stagger:0.2
    
})
tl.from("#leftsidenav video",{
    scale:0.5,
    duration:5
    
})
// Create an animation for all the cards
gsap.from(".card", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.8, // Adjust this value to change the stagger effect
  ease: "power3.out",
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
   start:"top 50%"
  }
});
gsap.from(".card2", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.9, // Adjust this value to change the stagger effect
  ease: "power3.out",
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
   start:"top 50%"
  }
});

gsap.from('#atomhead h1',{
    y:70,
    duration:1.9,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
    trigger:"#atomhead",
    scroller:"body",
    // markers:true,
   start:"top 15%"
  }
    
})

gsap.from('#atomp',{
    y:70,
    duration:1.9,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
    trigger:"#atomhead",
    scroller:"body",
    // markers:true,
   start:"top 15%"
  }
    
})


// scroll by drag
  let isDown = false;
    let startX;
    let scrollLeft;
    let containerWidth;
    let menuWidth;

    const scrollMenu = document.querySelector('.scrollmenu');

    scrollMenu.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollMenu.classList.add('active');
        startX = e.pageX - scrollMenu.offsetLeft;
        scrollLeft = scrollMenu.scrollLeft;
        containerWidth = scrollMenu.parentElement.offsetWidth;
        menuWidth = scrollMenu.scrollWidth;
    });

    scrollMenu.addEventListener('mouseleave', () => {
        isDown = false;
        scrollMenu.classList.remove('active');
    });

    scrollMenu.addEventListener('mouseup', () => {
        isDown = false;
        scrollMenu.classList.remove('active');
    });

    scrollMenu.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollMenu.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the scrolling speed here
        scrollMenu.scrollLeft = scrollLeft - walk;

        // Check if scroll has reached the end
        if (scrollMenu.scrollLeft + containerWidth >= menuWidth) {
            scrollMenu.classList.add('stretch-effect');
        } else {
            scrollMenu.classList.remove('stretch-effect');
        }
    });
    // scroll by ddrag ends here

    // gsap for rotated scrolller
    gsap.to("#rotatedscroller",{
        x:-500,
        duration:300,
        scrollTrigger:{
            trigger:"#rotatedscroller",
            scrub:1,
            // markers:true,
            start:"top 40%",
          
        }
        

    })

    // scroll2
const slider2 = document.querySelector('.scrollmenu2');
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener('mousedown', (e) => {
    isDown2 = true;
    slider2.style.cursor = 'grabbing';
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener('mouseleave', () => {
    isDown2 = false;
    slider2.style.cursor = 'default';
});

slider2.addEventListener('mouseup', () => {
    isDown2 = false;
    slider2.style.cursor = 'default';
});

slider2.addEventListener('mousemove', (e) => {
    if (!isDown2) return;
    e.preventDefault();
    const x2 = e.pageX - slider2.offsetLeft;
    const walk2 = (x2 - startX2) * 3; // Adjust the scrolling speed here
    slider2.scrollLeft = scrollLeft2 - walk2;
});


 // gsap for rotated scrolller2
    gsap.to("#rotatedscroller2",{
        x:-500,
        duration:300,
        scrollTrigger:{
            trigger:"#rotatedscroller2",
            scrub:1,
            // markers:true,
            start:"top 40%",
          
        }
        

    })
    // Normal scroll animation
gsap.to("#rotatedscroller2", {
  x: 1000,
  duration: 10,
  
});


// socialmedia anima
const smbox = document.querySelector('.smbox');
const smnormal = document.querySelector('.smnormal');
const smhover = document.querySelector('.smhover');

smbox.addEventListener('mouseenter', () => {
    smhover.style.display = "flex";
    // GSAP animation for the smhover div opening
    gsap.fromTo(smhover, { scaleY: 0 }, { duration: 0.5, scaleY: 1, transformOrigin: "center", ease: "power2.out" });
});

smbox.addEventListener('mouseleave', () => {
    // GSAP animation for the smhover div closing
    gsap.to(smhover, { duration: 0.5, scaleY: 0, transformOrigin: "center", ease: "power2.in", onComplete: hideHover });
});

function hideHover() {
    smhover.style.display = 'none';
}

