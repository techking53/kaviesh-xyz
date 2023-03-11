function rem() {
    document.querySelector("html").style.fontSize = window.innerWidth>645 ? window.innerWidth/153.6+"px" : window.innerWidth/92+"px"
}
rem()
// Slider Effect

const handleMouseMove =  e =>{
    document.querySelector("#left-side").style.width = (e.clientX / window.innerWidth * 100)+"%"
}
document.onmousemove=e=> handleMouseMove(e)
document.ontouchmove=e=> handleMouseMove(e.touches[0])

// Slider Effect


// Stagger Effect

const wrapper = document.getElementById("tiles");

let columns = 0,
rows = 0,
toggled = true;

function anima(index) {
    toggled = !toggled;
    document.querySelector(".tiles-c").classList.toggle("toggled");
    
    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    });
}

const createTile = index => {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    tile.style.opacity = toggled ? 0 : 1;
    
    tile.onclick = e => anima(index);
    
    return tile;
}

const createGrid = () => {
    wrapper.innerHTML = "";
    
    const size = window.innerWidth > 800 ? 80 : 50;
    
    columns = Math.floor(window.innerWidth / size);
    rows = Math.floor(window.innerHeight / size);
    
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    Array.from(Array(columns*rows)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
}

createGrid();
window.onresize = () => {
    createGrid()
    rem()
};

// Stagger Effect

const blanket=document.querySelector(".blanket")
const slider=document.querySelector(".slider")
const javaphile=document.querySelector(".javaphile")
const cgp=document.querySelector(".cgp")

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
    if (nex==javaphile) {
        let n =1
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
    if (nex==cgp) {
        if(!cgp.classList.contains("animad")){
            setTimeout(()=>{
                console.log(Math.ceil(columns/2));
                anima((rows%2==1) ? ((Math.ceil(rows/2)*columns)+((columns%2==1) ? Math.ceil(columns/2) : columns/2)-1) : (rows/2*columns+((columns%2==1) ? Math.ceil(columns/2) : columns/2)-1))
                cgp.classList.add("animad")
            },500)
        }
    }
}

slider.querySelector(".next").onclick=i=>{
    trans(slider,javaphile,"move-left","come-from-right")
}
javaphile.querySelector(".back").onclick=i=>{
    trans(javaphile,slider,"move-right","come-from-left")
}
javaphile.querySelector(".next").onclick=i=>{
    trans(javaphile,cgp,"move-up","come-from-down")
}
cgp.querySelector(".back").onclick=i=>{
    trans(cgp,javaphile,"move-down","come-from-up")
}