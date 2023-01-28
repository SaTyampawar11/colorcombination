function Fristpage(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            scrub:1,
           // markers:true,
            pin:true,
        }
    })
    
    tl
    .to("#centerimg",{
        left:"50%",
        duration:1,
        ease:Power1
    })
    .to("#circle #btm img",{
        rotate:"-100deg",
        scale:.6,
        stagger:.1,
        duration:1,
        ease:Power1
    },"same")
    
    .to("#circle #top img",{
        scale:.6,
        duration:1,
        ease:Power1
    },"same")
    .to("#cimg",{
        scale:0 ,
        duration:1,
        ease:Power1
    },"same")
    .to("#centerimg h5",{
        opacity:0,
        ease:Power1,
        duration:1,
    },"same")
    .to("#home h1",{
        bottom:"-100%" ,
        duration:1,
        ease:Power1
    },"same")
    .to("#circp",{
        scale:2,
        top:"50%",
        duration:1,
        ease:Power1
    },"same")
    .to("#circle",{
        scale:0,
        ease:Power1
    },"same2")
    .to("#smlcircle",{
        scale:0,
        ease:Power1,
        duration:1
    },"same2")
    .to("#circp",{
        opacity:0,
        duration:1,
        ease:Power1
    },"same2")
    .to("#tanhide",{
        top:"75%",
        delay:"-.4",
        rotate:"0deg",
        duration:1,
        ease:Power1
    },"same2")
    .to("#pbox",{
        top:"20%",
        delay:.1,
        duration:2,
        ease:Power1
    },"same2")
    .to("#home img",{
        scale:1.2,
        delay:.4,
        duration:2,
        ease:Power1
    },"same2")
    .to("#pbox",{
        top:"-80%",
        delay:"-.5",
        duration:2,
        ease:Power1,
    })    
};

Fristpage();

function Secondpage(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            start:"top top",
            scrub:1,
            //markers:true,
            pin:true,
        }
    });
    tl2
    .to(".circle",{
        top:"50%",
        ease:Power1,
        duration:1,
        stagger:.3,
    })
    .to(".circle",{
        left:"50%",
        ease: Power1,
        duration:1,
    })
    .to(".circle",{
        scale:.7,
        ease: Power1,
        duration:1,
    })
    .to(".circle",{
        scale:7,
        ease: Power1,
        duration:5,
    },"sm")
    .to("#sbtm h2",{
        opacity:0,
        y:"-15%",
        delay:1,
        ease: Power1,
        duration:1,
    },"sm")
    .to("#sbtm h3",{
        opacity:1,
        top:"10%",
        delay:1.3,
        ease: Power1,
        duration:2,
    },"sm")
    .to(".pi",{
        background: `linear-gradient(to right, rgb(248,149,91), rgb(88,53,110)) `,
        ease: Power1,
        duration:4,
    },"a")
    .to("#stop h1",{
        left:"-260%",
        ease:Power1,
        duration:10
    },"a")
    .to("#sbtm #p1",{
        opacity:0,
        delay:1,
        ease:Power1,
        duration:5
    },"a")
    .to("#sbtm #p2",{
        opacity:1,
        delay:3.5,
        ease:Power1,
        duration:4
    },"a")
    .to("#part1",{
        top:"0%",
        ease:Power1,
        duration:3,
    },"b")
    .to("#part2",{
        top:"0%",
        delay:.4,
        ease:Power1,
        duration:3,
    },"b")
    .to("#part3",{
        top:"0%",
        delay:.8,
        ease:Power1,
        duration:3,
    },"b")
    .to("#part4",{
        top:"0%",
        delay:1.2,
        ease:Power1,
        duration:3,
    },"b")
    .to("#part5",{
        top:"0%",
        delay:1.6,
        ease:Power1,
        duration:3,
    },"b")
    .to("#topprt",{
        left:"-50%",
        duration:2,
        ease:Power1
    },"c")
    .to("#btmprt",{
        left:"-50%",
        duration:2,
        ease:Power1
    },"c")
    .to("#btmprt1",{
        left:"50%",
        duration:2,
        ease:Power1
    },"c")
    .to("#topprt1",{
        left:"50%",
        duration:2,
        ease:Power1
    },"c")
    .to("#btmprt",{
        left:"-75%",
        duration:2,
        ease:Power1
    },"d")
    .to("#btmprt1",{
        left:"25%",
        duration:2,
        ease:Power1
    },"d")
}
Secondpage()