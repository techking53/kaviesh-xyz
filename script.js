const handleMouseMove =  e =>{document.querySelector("#left-side").style.width = (e.clientX / screenWidth * 100)+"%"}
const slider=document.querySelector(".slider")
const javaphile=document.querySelector(".javaphile")
slider.onmousemove=e=> handleMouseMove(e)
slider.ontouchmove=e=> handleMouseMove(e.touches[0])
javaphile.onclick=e=> handleMouseMove(e)


const wrapper = document.getElementById("tiles");
let columns = 0,
rows = 0,
toggled = true;
function anima(index) {
    toggled = !toggled;
    document.querySelector(".tiles-c").classList.toggle("toggled");
    document.querySelector(".cgp .logo").classList.toggle("visible");
    document.querySelector(".cgp .text").classList.toggle("visible");
    anime({targets: ".tile",opacity: toggled ? 0 : 1,delay: anime.stagger(50, {grid: [columns, rows],from: index})});
}
const createGrid = () => {
    wrapper.innerHTML = "";
    const size = screenWidth > 800 ? 80 : 50;
    columns = Math.floor(screenWidth / size);
    rows = Math.floor(window.innerHeight / size);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    Array.from(Array(columns*rows)).map((tile, index) => {
        wrapper.appendChild((index=>{
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.opacity = toggled ? 0 : 1;
            tile.onclick = e => anima(index);
            return tile;
        })(index));
    });
}

setTimeout(()=>{
    createGrid();
},1000)

window.onresize = () => {screenWidth=window.innerWidth;createGrid();rem()};


const blanket=document.querySelector(".blanket")
const cgp=document.querySelector(".cgp")
const age=document.querySelector(".age")
const music=document.querySelector(".music")
let acti=slider

function handleKeyPress(e) {
    e=e.keyCode
    evalacti=()=>{eval(acti.querySelector((e==39 || e==40) ? ".next" : ".back").dataset.trans)}
    // left
    if (e==37){
        if(acti==javaphile || acti==music){evalacti()}
    }
    // up
    if (e==38){
        if(acti==age || acti==cgp){evalacti()}
    }
    // right
    if (e==39){
        if(acti==slider || acti==age){evalacti()}
    }
    // down
    if (e==40){
        if(acti==javaphile || acti==cgp){evalacti()}
    }
}

function trans(pre,nex,an1,an2) {
    document.body.style.touchAction = "none"
    document.onkeydown = 0
    document.querySelectorAll(".t-butt").forEach(e=>{e.classList.add("disable")})
    pre.style.animation = an1+" 1s ease-in-out"
    nex.style.animation = an2+" 1s ease-in-out"
    nex.classList.add("active")
    acti=nex
    switch (an1) {
        case "move-right":
            tv= "translate(-100%,0)"
            break;
        case "move-left":
            tv= "translate(100%,0)"
            break;
        case "move-up":
            tv= "translate(0,-100%)"
            break;
        case "move-down":
            tv= "translate(0,100%)"
            break;
        default:
            break;
    }
    pre.style.transform = tv
    nex.style.transform = "translateX(0%)"
    setTimeout(()=>{
        pre.classList.remove("active")
        document.body.style.touchAction = "auto"
        document.querySelectorAll(".t-butt").forEach(e=>{e.classList.remove("disable")})
        document.onkeydown = function (e) {handleKeyPress(e)}
    },1100)
}
document.onkeydown = function (e) {handleKeyPress(e)};

function nexjava() {
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
    document.querySelector(".cgp .logo").src="cgp-logo.webp"
}

function nexcgp() {
    if(!cgp.classList.contains("animad")){
        setTimeout(()=>{
            anima((rows%2==1) ? ((Math.ceil(rows/2)*columns)+((columns%2==1) ? Math.ceil(columns/2) : columns/2)-1) : (rows/2*columns+((columns%2==1) ? Math.ceil(columns/2) : columns/2)-1))
            cgp.classList.add("animad")
        },screenWidth>800?1000:1200)
    }
}
function nexage() {calculateAge();ageCalci=setInterval(calculateAge,15000);}

function calculateAge() {
    var a = moment('2009-03-05 16:40');
    var b = moment();

    var years = a.diff(b, 'year');
    b.add(years, 'years');
    years*=-1
    
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    months*=-1
    
    var days = a.diff(b, 'days');
    b.add(days,'days')
    days*=-1
    
    var weeks=Math.floor(days/7)
    var days=days-(weeks*7)
    
    var hours = a.diff(b, 'h');
    b.add(hours,'h')
    hours*=-1
    
    var minutes = a.diff(b, 'minutes');
    b.add(minutes,'minutes')
    minutes*=-1
    age.querySelectorAll('.timeunit').forEach((e)=>{
        e.innerHTML=eval(e.dataset.unit)
        e.parentElement.style.display= e.innerHTML==0 ? "none" : 'block'
        e.nextElementSibling.querySelector('.s').textContent= e.innerHTML==1 ? "" : "s"
    })
}

let ageCalci;
document.querySelectorAll(".t-butt").forEach((e)=>{e.onclick=()=>{eval(e.dataset.trans)}})