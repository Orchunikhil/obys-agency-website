function loadingAnimation(){
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
        delay: 2,
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
    tl.from("#nav",{
        opacity: 0,
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
        y: 100,
        stagger: 0.25,
    })
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(e){
        gsap.to("#crsr",{
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power4.out"
        })
    })
    
    Shery.makeMagnet("#nav h3" , {});
    
}

loadingAnimation();
cursorAnimation();
