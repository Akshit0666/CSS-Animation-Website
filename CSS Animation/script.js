var circle = document.querySelector("#circle");
var frames= document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame => {
    frame.addEventListener("mousemove", function(details){

        var cordi = frame.getBoundingClientRect();
        var start = cordi.x;
        var end = cordi.x + cordi.width;
        
        var result = gsap.utils.mapRange(start,end,0,1,details.clientX);
    
        gsap.to(circle, {
            scale: 6
        })
    
        gsap.to(frame.children,{
            color: "#ff6700",
            duration:.5,
            y:"-5vw"
        })
    
        gsap.to(frame.children,{
            x:lerp(-40,40,result),
            duration:.5
        })

    })
    
    frame.addEventListener("mouseleave", function(details){
        gsap.to(circle, {
            scale: 1
        })
    
        gsap.to(frame.children,{
            color: "#000000",
            duration:.5,
            y:0
        })
    
        gsap.to(frame.children,{
            x:0,
            duration:.5
        })

    })
})

window.addEventListener("mousemove", function(details){
    gsap.to(circle, {
        x:details.clientX,
        y:details.clientY,
        duration : .5,
        ease : Expo
    })
})
