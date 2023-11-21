const sub=document.querySelector('#subject')
const sublist={
    nth:[],
    eng: [1,1],
    math: [1,1],
    gp: [1,1,1],
    lit: [1,1,1],
    ict: [1.4,1.2,1.2],
    bs:[1,1],
    fr:[1.25,1.111,1.25,1.111],
    hin:[1,1],
    esp:[1.25,1.111,1.25,1.111],
    phy:[1.5,1.25,1],
    bio:[1.5,1.25,1],
    chem:[1.5,1.25,1],
    ems:[1,1],
    acc:[1.22587,1],
    eco:[1.5,1.16667]
}
const papers=document.querySelector('.papers')
const pq="<div class='q'><label for='FormControlInput1' class='form-label'>Paper </label><input type='number' class='form-control' id='FormControlInput1' placeholder='XYZ'></div>"
let weights

function checkSub() {
    const subvalue=sub.value
    weights=sublist[subvalue]
    papers.innerHTML=pq.repeat(weights.length)
    document.querySelectorAll(".q").forEach((e,i)=>{e.querySelector("label").innerHTML="Paper "+(i+1)})
}

sub.addEventListener("change",checkSub)

document.querySelector('#calc').onclick=()=>{
    const mks=[]
    document.querySelectorAll("#FormControlInput1").forEach(e=>{mks.push(parseInt(e.value))})
    
    let tot=0;
    for(let i=0; i<weights.length; i++){
        tot+=weights[i] *mks[i];
    }
    document.querySelector('#tot').innerHTML=tot
}