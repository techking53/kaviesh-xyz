document.querySelector("html").style.fontSize = window.innerWidth>645 ? window.innerWidth/153.6+"px" : window.innerWidth/92+"px"

const handleMouseMove =  e =>{
    document.querySelector("#left-side").style.width = (e.clientX / window.innerWidth * 100)+"%"
}
document.onmousemove=e=> handleMouseMove(e)
document.ontouchmove=e=> handleMouseMove(e.touches[0])


const slider=document.querySelector(".slider")
const javaphile=document.querySelector(".javaphile")

document.querySelector(".slider .next").onclick=e=>{
    slider.style.animation = "move-left 1s ease-in-out"
    javaphile.style.animation = "come-from-right 1s ease-in-out"
    javaphile.classList.add("active")
    slider.style.transform = "translateX(-100%)"
    javaphile.style.transform = "translateX(0%)"
    setTimeout(()=>{slider.classList.remove("active")},1000)
}

document.querySelector(".javaphile .back").onclick=e=>{
    javaphile.style.animation = "move-right 1s ease-in-out"
    slider.style.animation = "come-from-left 1s ease-in-out"
    slider.classList.add("active")
    javaphile.style.transform = "translateX(100%)"
    slider.style.transform = "translateX(0%)"
    
    setTimeout(()=>{
        javaphile.classList.remove("active");
    },1000)
}
