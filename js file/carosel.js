const  image = document.querySelectorAll(".carosel-img-con");
const  dots = document.querySelectorAll(".dot");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev")
const nexts = document.querySelector("#nexts");
const prevs = document.querySelector("#prevs");
const movetoleft  = document.querySelector(".image-carosel1");
const nextitem = document.querySelector("#nextitem");
const previous = document.querySelector("#previous");
const carel2 = document.querySelector(".image-carosel2");
const backTotop = document.querySelector(".searc-con");



//changing the image
const timetochangeimage  = 2000;


const length=movetoleft.clientWidth
console.log(length);

let increamentindex=0;
image[increamentindex].style.display='none';
    image[increamentindex].style.display='none';

console.log(next);
console.log(prev);


function change() {
  document.querySelector(".dots-con.dotsmove").classList.remove("dotsmove");
}

  next.addEventListener("click",function() {
    image[increamentindex].style.display='none';
    increamentindex=(increamentindex +1 )% image.length;
    image[increamentindex].style.display='block';

  })


  //show slide
  prev.addEventListener("click",function() {
    image[increamentindex].style.display='none';
    increamentindex=(increamentindex >0 )? increamentindex-1:0;
    image[increamentindex].style.display='block';

  })
  //Infinite change image
  setInterval(e => {
    image[increamentindex].style.display='none';
    increamentindex=(increamentindex +1 )% image.length;
     
    image[increamentindex].style.display='block';
     
    
  }, timetochangeimage);

  //slide dot slide
 
   dots.forEach((e,indica)=>{
    e.addEventListener("click",function() {
      increamentindex=indica
      dots.forEach(ele=>ele.classList.remove("dotmove")) 
      this.classList.add("dotmove");
      
    image[increamentindex].style.display='none';
    increamentindex=(increamentindex +1 )% image.length; 
    image[increamentindex].style.display='block';
   

    })
     
   })


 setInterval(e => {
  dots.forEach((e,indica)=>{
    e.addEventListener("click",function() {
      increamentindex=indica
      change()
      indica.classList.add("dotmove");
      
 
   

    })
     
   })
 }, 2000);
//End of change image


//slide 2 image  slide
let count=0;

 prevs.addEventListener("click",function() {
 console.log('red');
 if (count===1) {
  prevs.style.cursor='text'
 }else if(count===0){
  prevs.style.cursor='pointer'
 }
  count=(count <1 )? count+1:1;
  movetoleft.style.transform='translateX('+(count)*-100+'%)'
   
})
 

nexts.addEventListener("click",function() {
  console.log('red');
  if (count===0) {
    prevs.style.cursor='alias'
   }
    count=(count > 0 )? count-1:0;
    movetoleft.style.transform='translateX('+(count)*-50+'%)'
  })

  prevs.addEventListener("mouseover",function() {
 if (count===1) {
  prevs.style.cursor='text'
 }
 else if(count===0){
  prevs.style.cursor='pointer'
 }
  })


  nexts.addEventListener("mouseover",function() {
    if (count===0) {
     console.log('job');
   
     nexts.style.cursor='text'
    }
    else if(count===1){
     nexts.style.cursor='pointer'
    }
     })
     
     //
     previous.addEventListener("click",function() {
      
        console.log('rat');
       count=(count >0 )? count-1:0;
       carel2.style.transform='translateX('+(count)*-50+'%)'
      /* if (count===0) {
        previous.style.display='none'
       }else{
        previous.style.display='block'

       }*/
        
     })
      
     
     nextitem.addEventListener("click",function() {
       
      
         count=(count < 1 )? count+1:1;
         carel2.style.transform='translateX('+(count)*-50+'%)'
     })

     nextitem.addEventListener("mouseover",function() {
       
      console.log('2547');
      
  })

     window.addEventListener('scroll',function(){
      if (window.pageYOffset >90) {
          backTotop.classList.add('pageup')
 
         
      }
      else
      {
        backTotop.classList.remove('pageup')

      }
      })

    

    window.addEventListener('scroll',function(){
      if (window.pageYOffset >1500) {
            console.log('scroll');

            document.querySelector('#backtotop').style.display='flex';
   
           
        }
        else if(window.pageYOffset < 1500) {
          console.log('noscroll');

          document.querySelector('#backtotop').style.display='none';
 
         
      }
      })

      document.querySelector('#backtotop').addEventListener('click',function(){
       window.scrollTo(0,0)
        console.log('scale');
      })
let oficialimg = document.querySelector(".Official-Store-img img");
let i=0;
  let arrayimg=[]

arrayimg[0]='/image/Desktop_MLP_sliderearpod.jpg';
arrayimg[1]=' /image/Desktop_MLP_sliderphone.jpg';
arrayimg[2]='/image/Desktop_MLP_sliderunilever.jpg'; 
arrayimg[3]='/image/Desktop-MLP-sliderbeer.jpg'; 
arrayimg[4]='/image/Desktop-MLP-sliderdefacto.jpg'; 
arrayimg[5]="/image/S-MLP.jpg";


function slideshow() {
  
  oficialimg.src=arrayimg[i]
if (i<arrayimg.length - 1) {
  i=i+1
}
else{
  i=i-1

}


}
setInterval(() => {

  slideshow()
   
}, 5000);
 
   

let toi=document.querySelectorAll('.Official-dot')

toi.forEach((e,index)=>{
e.addEventListener('click',function(){
  i=index
  oficialimg.src=arrayimg[i]
toi.forEach(e=>e.classList.remove('current'))
this.classList.add('current')
})
})



 