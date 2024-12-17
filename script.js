function page1Animation() {
    var tl = gsap.timeline();
    gsap.from("nav i", {
        rotate: -540,
        delay: 0.5,
        duration: 2,
        x: -50,
        opacity: 0
    })
    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        stagger: 0.3,
    })

    tl.from(".center-part1 h1", {
        x: -500,
        duration: 0.2,
        opacity: 0,
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.9,
    })

    tl.from(".center-part2", {
        opacity: 0,
        duration: 0.5,
        x: 2500,
    }, "-=1.3")

    gsap.from(".sec-bottom img", {
        opacity: 0,
        duration: 0.3,
        y: 30,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".center ",
            scroller: "body",
            // markers:true,
            start: "bottom 70%",
        }
    })
}

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            scroller: "body",
            // markers: true,
            start: "bottom 80%",
            end: "bottom -35%",
            scrub: 1,

        }
    })
    tl2.from(".services h3", {
        x: -200,
        opacity: 0,
        duration: 0.2,

    }, "random")
    tl2.from(".services p", {
        x: 500,
        opacity: 0,
    }, "random")

    //----------- line 1 --------------
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim1")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim1")

    //----------- line 2 --------------
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim2")

    //------------- line 3 -------------
    tl2.from(".elem.line3.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim3")
    tl2.from(".elem.line3.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim3")
}

window.addEventListener("wheel", function (dets) {
    // console.log(dets.deltaY);
    if (dets.deltaY > 3) {
        gsap.to("nav", {
            y: -100,
            duration: 1,
        })
    }
    else if (dets.deltaY < 0) {
        gsap.to("nav", {
            y: 0,
            duration: 1,
        })
    }

})

function textBreaker(targetSelector, animationSettings) {
    var targetElement = document.querySelector(targetSelector);
    if (!targetElement) {
        console.error(`Element with selector "${targetSelector}" not found.`);
        return;
    }

    var targetElementText = targetElement.textContent;
    var splittedText = targetElementText.split("");
    var wrappedText = "";

    splittedText.forEach(function (elem, index) {
        // console.log(elem,index);
        wrappedText += `<span>${elem}</span>`;
    })

    targetElement.innerHTML = wrappedText;

    // console.log(h1);

    gsap.from(`${targetSelector} span`, {
        ...{

            opacity: 0,
            delay: 3,
            duration: 0.01,
            stagger: 0.1,
            repeat: -1,
        },
        ...animationSettings
        // yoyo:true
    })

}

//---------animating h1 of center-part1-----------
//---------animationSettings: Accepts an object for customizing the GSAP animation (e.g., delay, duration, stagger).
textBreaker(".center-part1 h1", {
    opacity: 0,
    delay: 3,
    duration: 0.01,
    stagger: 0.1,
    repeat: 0,
})

//---------animating p of center-part1-----------
textBreaker(".center-part1 p", {
    opacity: 0,
    delay: 3,
    duration: 0.02,
    stagger: 0.05,
    repeat: -1,

});

textBreaker(".services p", {
    opacity: 0,
    delay: 3,
    duration: 0.02,
    stagger: 0.05,
    repeat: -1,
})

var container = document.querySelector(".container")
var hover = document.querySelectorAll(".elem")
hover.forEach(hover => {

    //box shadow hovering animation
    hover.addEventListener("mouseenter",function(){
        gsap.to(this,{
            boxShadow:"3px 7px 0 black",
            duration:0.2,
        })
    })
    hover.addEventListener("mouseleave",function(){
        gsap.to(this,{
            boxShadow:"0px 0px 0 black",
            duration:0.2,
        })
    })
    hover.addEventListener("mousemove", function (dets) {
        posX = dets.offsetX;
        posY = dets.offsetY;

        var arrow = hover.querySelector("h4")
        // var anim = gsap.timeline(); 
        if (dets.offsetX > 0 || dets.offsetY > 0) {
            // console.log(dets.offsetX);
            gsap.to(arrow, {
                x: posX / 7,
                y: posY / 7,
                duration: 0.3,
                ease: "none",
            })
        }

        hover.addEventListener("mouseleave", function () {
            gsap.to(arrow, {
                x: 0,
                y: 0,
                duration: .3,
                ease: "none",
            })
        })
    })

})

page1Animation();
page2Animation();