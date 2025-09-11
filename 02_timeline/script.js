/*gsap.to("#box",{
    x:1000,
    duration:1.5 ,
    delay:1,
    rotate:360,
    
})

gsap.to("#box2",{
    x:1000,
    duration:2,
    delay:2.5
})

gsap.to("#box3",{
    x:1000,
    duration:2,
    delay:4.5,
    borderRadius:"50%",
    backgroungColor:"pink",
})*/

//time line

/*var tr = gsap.timeline();

tr.to("#box",{
    x:1200,
    duration:1.5,
    delay:1,
    rotate:360,
})

tr.to("#box2",{
    x:1200,
    duration:1.5,
    delay:1
})
tr.to("#box3",{
    x:1200,
    duration:1.5,
    delay:1
})*/


var tr = gsap.timeline();

tr.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tr.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})

tr.from("h2",{
   y:20,
   opacity:0,

duration:0.5,
sacle:0.2
})
