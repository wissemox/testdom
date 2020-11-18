let delet =document.querySelectorAll(".product0 ion-icon ")
let colorr =  document.querySelectorAll(".omg")
let mmpazd =  document.getElementsByClassName("morgd")
let d = "color mawjdo"

let addd =   document.querySelectorAll(".add")

let mop = document.querySelectorAll(".product0 input")
let morgg=  document.querySelectorAll(".morg")
console.log(mop)
console.log(morgg)
console.log(mmpazd)

//remve 
for(let i =0 ; i<delet.length ; i++) { 
 delet[i].addEventListener("click",function(){ 
  delet[i].parentElement.remove()
 })
} 
//img color 
for(let i=0 ; i<colorr.length ; i++) { 
 
  colorr[i].addEventListener("click",function(){
      if(d=="color mawjdo") { 
        colorr[i].style.filter="grayscale(0%)" 
        d="colormoch"
      } else if(d=="colormoch") { 
        colorr[i].style.filter="grayscale(100%)" 
        d="color mawjdo"
      }
  })
}

for(let i=0 ; i<addd.length;i++) { 
  addd[i].addEventListener("click",function(){ 
    let mohh =  document.querySelectorAll(".moh").innerHTML ;
    mohh[i]++
     console.log(mohh[i])
 })
}
function wissemad() { 
 let A = mop.values*morgg ;  
 mmpazd.innerHTML=A

}