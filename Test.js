let inc=document.getElementById('inc')
let dec=document.getElementById('dec')
let data=document.getElementById('canvas')

inc.addEventListener('click',()=>{
  data.innerText=parseInt(data.innerText)+1;
})

dec.addEventListener('click',()=>{
  data.innerText=parseInt(data.innerText)-1;
})