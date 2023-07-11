let sun = document.getElementById('sun')
let sahab = document.getElementById('sahab')
let prt3 = document.getElementById('prt3')
let heroText = document.getElementById('hero-text')
let prt4 = document.getElementById('prt4')
let prt5 = document.getElementById('prt5')
let prt6 = document.getElementById('prt6')
let prt7 = document.getElementById('prt7')
let prt8 = document.getElementById('prt8')
let prt9 = document.getElementById('prt9')
let prt10 = document.getElementById('prt10')
let aboutUs = document.getElementsByClassName('about-content')

// let rotate11 = document.getElementsByClassName('rotate1')


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    heroText.style.bottom = value * 0.8 + 'px'
    prt6.style.bottom = value * 1 + 'px'
        // prt10.style.bottom = value * 0.1 + 'px'
    sun.style.bottom = value * 0.2 + 'px'
    prt4.style.top = value * 0.1 + 'px'
    prt5.style.top = value * 0.2 + 'px'
    prt7.style.top = value * 0.2 + 'px'
        //     prt4.style.top = value * 0.05 + 'px'
        //     prt8.style.bottom = value * 0.1 + 'px'
        //     prt3.style.top = value * 0.5 + 'px'
        //     prt4.style.top = value * 0.1 + 'px'
})



// --------------------------------------------Mockups-----------------------------------
gsap.registerPlugin(ScrollTrigger)

gsap.to('#mock1', {
    opacity: 0,
    // duration: 1,
    scrollTrigger: {
        trigger: '.mockups-text',
        // markers: true
    }
})

gsap.to('.rotate1', {
    // opacity: 0,
    duration: 4,
    transform: 'rotate(120deg)',
    scrollTrigger: {
        trigger: '.rotate1',
        // start: "top",
        end: "top",
        // markers: true,
        toggleActions: "play none reverse none"
    }
})

gsap.to('.rotate2', {
    // opacity: 0,
    duration: 4,
    transform: 'rotate(-166deg)',
    scrollTrigger: {
        trigger: '.rotate2',
        end: "top",
        // markers: true,
        toggleActions: "play none reverse none"
    }
})

gsap.from('.about-content', {
    opacity: 0,
    y: 120,
    duration: 2,
    // transform: 'rotate(-166deg)',
    scrollTrigger: {
        trigger: '.about-us',
        // end: "top",
        // markers: true,
    }
})

// --------------------------------------------statistics-----------------------------------
// var ProjectCounter = document.getElementById('pCounter')
// var observer = new IntersectionObserver(function(entries) {
//     // isIntersecting is true when element and viewport are overlapping
//     // isIntersecting is false when element and viewport don't overlap
//     if (entries[0].isIntersecting === true) {
//         console.log('Element has just become visible in screen');
//         for (var i = 0; i < 5; i++) {
//             console.log('test')
//         }
//     }
// }, { threshold: [0] });

// observer.observe(document.querySelector(".statistics"));