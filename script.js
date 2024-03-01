try {
    const decoded=atob(window.location.href.split("=")[1])
    if(decoded.split("//")[0] == "http:" || decoded.split("//")[0] == "https:"){
        window.location.href=decoded
    }
} catch (error) {}


const btn= document.querySelector('button')
const h2=document.querySelector('h2')
const input=document.querySelector('input')

btn.onclick=()=>{
    let inval=input.value
    if(!inval.includes('http')){inval="https://"+inval}
    if(!inval.includes(".")){inval="gah";}
    output=inval=="gah"?"Invalid Input":btoa(inval)
    h2.innerHTML="https://links.kaviesh.xyz/?="+output
}