var tl = gsap.timeline();
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
});
tl.from("#line1-part1 , .line h2", {
    opacity: 0,
    onStart: function() {
        var h5timer = document.querySelector("#line1-part1 h5");
        var count = 0;
        setInterval(function() {
            if (count < 100) {
                h5timer.innerHTML = count++;
            } else {
                h5timer.innerHTML = count;
            }
        }, 33);
    },
});
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
});
tl.from("#page1", {
    y: 1600,
    duration: 0.2,
    opacity: 0,
    ease: "power4.out",
});
tl.to("#loader",{
    display: "none",
    
})

