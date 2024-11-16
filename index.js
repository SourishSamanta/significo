gsap.set(".mslides",{scale: 5})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        markers: true,
        
    },
});

        tl.to(
            ".vdodiv",
            {
                "--clip": "2%",
                ease: "power2",
                
            },
            
            "a"
        ).to(
            ".mSlides",
            {
                scale: 1,
                ease: "power2",
                
            },
            "a"
        ).to(
            ".lft",
            {
                xPercent: -10,
                ease: "power2",
                stagger: 0.03
            },
            "b"
        ).to(
            ".rgt",
            {
                xPercent: 10,
                ease: "power2",
                stagger: 0.03
            },
            "b"
        );