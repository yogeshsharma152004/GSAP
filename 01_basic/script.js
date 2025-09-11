//to() => move the element from initial position to final positon
gsap.to("#box",{
    x:1000,
    duration:2 ,
    delay:1,
    rotate:360,
    backgroungColor:"pink",
    borderRadius:"50%",
    repeat:1,
    yoyo:true
})

//from() => move the element form the final positon to the initial positon
gsap.from("#box2",{
    x:500,
    duration:2,
    delay:1
})

//to selct mutiple element at the same time

gsap.from("h1",{
    color:"red",
    duration:2,
    delay:1,
    y:30,
    opacity:0,
    stagger:0.5
})