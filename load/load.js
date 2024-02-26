let screenWidth= window.innerWidth
function rem() {
    document.querySelector("html").style.fontSize = screenWidth>645 ? screenWidth/153.6+"px" : screenWidth/92+"px"
}
rem()

document.head.innerHTML+='<link rel="stylesheet" href="css/movement.css"><link rel="stylesheet" href="css/slider.css"><link rel="stylesheet" href="css/yinyang.css"><link rel="stylesheet" href="css/javaphile.css"><link rel="stylesheet" href="css/cgp.css"><link rel="stylesheet" href="css/age.css"><link rel="stylesheet" href="css/music.css"><link rel="stylesheet" href="css/queries.css">'

const icons = document.createElement('script');
icons.src = 'https://kit.fontawesome.com/cb1920e83d.js';
icons.crossorigin = 'anonymous';
document.head.appendChild(icons);

const momentjs = document.createElement('script');
    momentjs.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js';
    momentjs.crossorigin = 'anonymous';
    momentjs.referrerpolicy = 'no-referrer';
    document.body.appendChild(momentjs);

fetch('load/content.html')
.then(response => response.text())
.then(html => {document.body.innerHTML += html;

    const animejs = document.createElement('script');
    animejs.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    animejs.crossorigin = 'anonymous';
    animejs.referrerpolicy = 'no-referrer';
    document.body.appendChild(animejs);

    const scriptEl=document.createElement('script');
    scriptEl.src="script.js";
    document.body.appendChild(scriptEl);

    document.querySelector(".load").style.display="none";})
.catch(error => console.error('Error loading HTML:', error));