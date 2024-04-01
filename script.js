
function homepage(){
    gsap.set(".slidesm", {scale :5})

var tl =gsap.timeline({
    scrollTrigger :{
        trigger:".home",
        start : "top top",
        end : "bottom bottom",
        // pin: true,
        scrub: 1
    }
})

tl.to(".vdodiv",{
    '--clip' : "0%",
    ease : Power2,
    duration: 2,
},'a')
tl.to(".slidesm",{
    scale: 1,
    ease : Power2,
    duration: 2,
},'a')
tl.to(".lft",{
    xPercent:-30,
    ease: Power4,
    stagger: .03
},'b')
tl.to(".rgt",{
    xPercent:30,
    ease: Power4,
    stagger: .03
},'b')
}
homepage();

function realpage(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
})
}
realpage();

function teampage(){
    document.querySelectorAll(".lestelem").forEach(function(e){
    
        e.addEventListener("mousemove", function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity: 1,
                ease: Power4,
                duration: .5,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
            })
        });
    
        e.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity: 0,
                ease: Power4,
                duration: .5
            }) 
        });
    
    })
}
teampage();

function para(){
    let clutter = "";
let text = document.querySelector(".textpara");
text.textContent.split("")
.forEach(function(e){
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
text.innerHTML = clutter;

gsap.set(".textpara span", {opacity:0.1})
gsap.to(".textpara span",{
    scrollTrigger:{
        trigger: ".para",
        start: "top 60%",
        end: "bottom 90%",
        scrub: .2
    },
    opacity: 1,
    stagger: .03,
    ease: Power4,
})
}
para();

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();

function capsule(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub:1
        },
        y: 0,
        ease: Power4
    })
}
capsule();

document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end: "botttom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
    })
})