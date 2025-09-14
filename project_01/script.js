var main = document.querySelector("#main")

var image = document.querySelector("#image")

var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove",function(e){
    gsap.to(cursor , {
        x:e.x,
        y:e.y,
        duration:1,
        ease:"back.out",
        
    })
})


image.addEventListener("mouseenter" ,function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor ,{
        scale:4,
         backgroundColor: "#ffffff5c",
    })
})

image.addEventListener("mouseleave" ,function(){
    cursor.innerHTML = ""
    gsap.to(cursor ,{
        scale:1,
         backgroundColor: "#fff",
    })
})