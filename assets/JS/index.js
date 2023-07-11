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