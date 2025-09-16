
function breakeText(){

    var text = document.querySelector("h1")

var head = text.textContent

var splited = head.split("")

var half = splited.length/2

var clutter = ""

splited.forEach(function(e,index){

    if(index<half){
          clutter += `<span class="first">${e}</span>`
    }
    else{
        clutter += `<span class="last">${e}</span>`
        
    }
      
})

text.innerHTML = clutter
}

breakeText()

gsap.from("h1 .first" ,{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from("h1 .last" ,{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})
