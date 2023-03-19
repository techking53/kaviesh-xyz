let screenWidth= window.innerWidth
function rem() {
    document.querySelector("html").style.fontSize = screenWidth>645 ? screenWidth/153.6+"px" : screenWidth/92+"px"
}
rem()

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
    
    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    });
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

createGrid();
window.onresize = () => {
    screenWidth=window.innerWidth
    createGrid()
    rem()
};

const blanket=document.querySelector(".blanket")
const cgp=document.querySelector(".cgp")
const age=document.querySelector(".age")
let acti=slider

function handleKeyPress(e) {
    e=e.keyCode
    if (acti==slider) {
        if (e==39) {
            trans(slider,javaphile,"move-left","come-from-right")
            nexjava()        
        }
    } else if (acti==javaphile){
        if (e==40) {
            trans(javaphile,cgp,"move-up","come-from-down")
            nexcgp()
        } else if (e==37) {
            trans(javaphile,slider,"move-right","come-from-left")
        }
    } else if (acti==cgp){
        if (e==38) {
            trans(cgp,javaphile,"move-down","come-from-up")
            nexjava()
        } else if (e==40) {
            nexage()
            trans(cgp,age,"move-up","come-from-down")
        }
    } else if (acti==age){
        if (e==38) {
            trans(age,cgp,"move-down","come-from-up")
            nexcgp()
        }
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
}

function nexcgp() {
    if(!cgp.classList.contains("animad")){
        setTimeout(()=>{
            anima((rows%2==1) ? ((Math.ceil(rows/2)*columns)+((columns%2==1) ? Math.ceil(columns/2) : columns/2)-1) : (rows/2*columns+((columns%2==1) ? Math.ceil(columns/2) : columns/2)-1))
            cgp.classList.add("animad")
        },screenWidth>800?1000:1200)
    }
}
function nexage() {
    calculateAge()
    ageCalci=setInterval(calculateAge,15000);
}

function calculateAge() {
    const birthDate = new Date('March 5, 2009 16:40:00');
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - birthDate.getTime();
    const ageDate = new Date(diffInMs);
    const ageInYears = Math.abs(ageDate.getUTCFullYear() - 1970);
    const ageInMonths = ageDate.getUTCMonth();
    const ageInDays = ageDate.getUTCDate() - 1;
    let ageInWeeks = Math.floor((diffInMs - ageInYears * 1000 * 60 * 60 * 24 * 365.25 - ageInMonths * 1000 * 60 * 60 * 24 * 30.44) / (1000 * 60 * 60 * 24 * 7));
    const ageInHours = ageDate.getUTCHours();
    const ageInMinutes = ageDate.getUTCMinutes();
    const remainingDays = Math.floor(ageInDays%7)
    const yearsEl=document.getElementById('years')
    const monthsEl=document.getElementById('months')
    const weeksEl=document.getElementById('weeks')
    const daysEl=document.getElementById('days')
    const hoursEl=document.getElementById('hours')
    const minutesEl=document.getElementById('minutes');
    ageInWeeks+=1;
    yearsEl.textContent = ageInYears;
    monthsEl.textContent = ageInMonths;
    weeksEl.textContent = ageInWeeks;
    daysEl.textContent = remainingDays;
    hoursEl.textContent = ageInHours;
    minutesEl.textContent = ageInMinutes;
    ageInYears==0 ? yearsEl.parentElement.style.display="none" : yearsEl.parentElement.style.display="block" ;
    ageInMonths==0 ? monthsEl.parentElement.style.display="none" : monthsEl.parentElement.style.display="block" ;
    ageInWeeks==0 ? weeksEl.parentElement.style.display="none" : weeksEl.parentElement.style.display="block" ;
    remainingDays==0 ? daysEl.parentElement.style.display="none" : daysEl.parentElement.style.display="block" ;
    ageInHours==0 ? hoursEl.parentElement.style.display="none" : hoursEl.parentElement.style.display="block" ;
    ageInMinutes==0 ? minutesEl.parentElement.style.display="none" : minutesEl.parentElement.style.display="block" ;
    ageInYears==1 ? yearsEl.nextElementSibling.textContent="Year" : yearsEl.nextElementSibling.textContent="Years" ;
    ageInMonths==1 ? monthsEl.nextElementSibling.textContent="Month" : monthsEl.nextElementSibling.textContent="Months" ;
    ageInWeeks==1 ? weeksEl.nextElementSibling.textContent="Week" : weeksEl.nextElementSibling.textContent="Weeks" ;
    remainingDays==1 ? daysEl.nextElementSibling.textContent="Day" : daysEl.nextElementSibling.textContent="Days" ;
    ageInHours==1 ? hoursEl.nextElementSibling.textContent="Hour" : hoursEl.nextElementSibling.textContent="Hours" ;
    ageInMinutes==1 ? minutesEl.nextElementSibling.textContent="Minute" : minutesEl.nextElementSibling.textContent="Minutes" ;
}

slider.querySelector(".next").onclick=()=>{
    trans(slider,javaphile,"move-left","come-from-right")
    nexjava()
}
javaphile.querySelector(".back").onclick=()=>{
    trans(javaphile,slider,"move-right","come-from-left")
}
javaphile.querySelector(".next").onclick=()=>{
    trans(javaphile,cgp,"move-up","come-from-down")
    nexcgp()
}
cgp.querySelector(".back").onclick=()=>{
    trans(cgp,javaphile,"move-down","come-from-up")
    nexjava()
}
let ageCalci;
cgp.querySelector(".next").onclick=()=>{
    nexage()
    trans(cgp,age,"move-up","come-from-down")
}
age.querySelector(".back").onclick=()=>{
    clearInterval(ageCalci)
    trans(age,cgp,"move-down","come-from-up")
    nexcgp()
}
