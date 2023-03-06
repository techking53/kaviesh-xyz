document.getElementById("html").style.fontSize = window.innerWidth>645 ? window.innerWidth/153.6+"px" : window.innerWidth/92+"px"

const left=document.getElementById("left-side")
const handleMouseMove =  e =>{
    left.style.width = (e.clientX / window.innerWidth * 100)+"%"
}
document.onmousemove=e=> handleMouseMove(e)
document.ontouchmove=e=> handleMouseMove(e.touches[0])


const slider=document.querySelector(".slider")
const javaphile=document.querySelector(".javaphile")
const sliderNext=document.querySelector(".slider #next")

sliderNext.onclick=e=>{
    slider.style.animation = "move-left 1s ease-in-out"
    javaphile.style.animation = "come-from-right 1s ease-in-out"
    javaphile.classList.add("active")
    slider.style.transform = "translateX(-100%)"
    javaphile.style.transform = "translateX(0%)"
    setTimeout(()=>{slider.classList.remove("active")},1000)
}