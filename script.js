document.querySelector("html").style.fontSize = window.innerWidth>645 ? window.innerWidth/153.6+"px" : window.innerWidth/92+"px"

const handleMouseMove =  e =>{
    document.querySelector("#left-side").style.width = (e.clientX / window.innerWidth * 100)+"%"
}
document.onmousemove=e=> handleMouseMove(e)
document.ontouchmove=e=> handleMouseMove(e.touches[0])

const blanket=document.querySelector(".blanket")
const slider=document.querySelector(".slider")
const javaphile=document.querySelector(".javaphile")

function trans(pre,nex,an1,an2) {
    document.body.style.touchAction = "none"
    document.querySelectorAll(".t-butt").forEach(e=>{e.classList.add("disable")})
    pre.style.animation = an1+" 1s ease-in-out"
    nex.style.animation = an2+" 1s ease-in-out"
    nex.classList.add("active")
    switch (an1) {
        case "move-right":
            tv= "-100%"
            break;
        case "move-left":
            tv= "100%"
            break;
        default:
            break;
    }
    pre.style.transform = "translateX(" + tv + ")"
    nex.style.transform = "translateX(0%)"
    setTimeout(()=>{
        pre.classList.remove("active")
        document.body.style.touchAction = "auto"
        document.querySelectorAll(".t-butt").forEach(e=>{e.classList.remove("disable")})
    },1100)
}

slider.querySelector(".next").onclick=i=>{
    trans(slider,javaphile,"move-left","come-from-right")
    n=1
    document.querySelectorAll(".j-iflex.me h3").forEach((e)=>{
        e.classList.contains("anted") ? e.style.animation="none" : e.classList.add("anted")
        edelay=(400+500*n)
        e.style.animationDelay=edelay+"ms"
        setTimeout((e) => {
            e.style.transform="translateX(0)"
        }, edelay+100,e);
        n++
    })
    setTimeout(()=>{
        blanket.classList.contains("animated") ? blanket.style.animation="none" : blanket.classList.add("animated")
    },200)
}
javaphile.querySelector(".back").onclick=i=>{
    trans(javaphile,slider,"move-right","come-from-left")
}