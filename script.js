try {
    const decoded=atob(window.location.href.split("/?=")[1])
    if(decoded.includes(".")){
        window.location.href="https://"+decoded
    }
} catch (error) {}

const btn= document.querySelector('button')
const h2=document.querySelector('h2')
const input=document.querySelector('input')
const link=document.querySelector('a')

btn.onclick=()=>{
    let inval=input.value
    if(inval.includes('http')){inval=inval.split("//")[1]}
    if(inval.includes('www')){inval=inval.split("www.")[1]}
    if(!inval.includes(".")){inval="gah";}
    output=inval=="gah"?"Invalid Input":"https://dns.kaviesh.xyz/?="+btoa(inval)
    h2.innerHTML=output
    link.href=inval=="gah"?"":output
}