document.getElementById("html").style.fontSize = window.innerWidth>645 ? window.innerWidth/153.6+"px" : window.innerWidth/92+"px"
const left=document.getElementById("left-side")
const handleMouseMove =  e =>{
    left.style.width = (e.clientX / window.innerWidth * 100)+"%"
}
document.onmousemove=e=> handleMouseMove(e)
document.ontouchmove=e=> handleMouseMove(e.touches[0])