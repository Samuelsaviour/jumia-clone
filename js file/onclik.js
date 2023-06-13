const accountBtn=document.querySelector("#click");
const dropdown=document.querySelector("#dropdown");
const help=document.querySelector("#help");
const helpList=document.querySelector("#help-list");
const no=document.querySelectorAll(".no");
const hour=document.querySelector("#hour");
const second=document.querySelector("#second");
const minute=document.querySelector("#minute"); 
const nextite=document.querySelectorAll("#nextitemon");
const previou=document.querySelectorAll("#previouson"); 
let containingslide=document.querySelectorAll("#image-caro"); 

 

 
nextite.forEach(element => {
   element.addEventListener("click",function() {
        console.log('red');
       
          count=(count < 1 )? count+1:1;
           
          containingslide.forEach(sat => {
           sat.style.transform='translateX('+(count)*-50+'%)'
           console.log(sat );
          });
       
              
              
             
         
          
         
         /* if (count===0) {
            previou.style.opacity='0'
           }else{
            previou.style.opacity='1'
      
           }*/
            
    
    
      }) 
});
 
 
  

  previou.forEach(element => {
  element.addEventListener("click",function() {
    
      
        count=(count >0 )? count-1:0;
          
        containingslide.forEach(sat => {
            sat.style.transform='translateX('+(count)*-50+'%)'
           });
        
         
            
     
          
       })
  });
    

   
     
   
      
 
/*containingslide.addEventListener("mouseenter",function() {
    
       
        
      
           nextite.style.visibility='visible'
            
     
          
       })
       containingslide.addEventListener("mouseleave",function() {
    
       
        
      
        nextite.style.visibility='hidden'
         
  
       
    })*/
/*function timing() {
    let currentdate=new Date();
    let hours=currentdate.getHours()
    let minutes=currentdate.getMinutes()
    let seconds=currentdate.getSeconds()
    hour.innerText=hours+`hr`
    minute.innerText=minutes+`min`
    second.innerText=seconds+`sec`
}*/
 



function countDown() {
    let today=new Date();
    //console.log(today);
    let eventdate=new Date("January 1,2022 00:00:00").getTime()
   // console.log(eventdate);
    let currentime=today.getTime()
//console.log(currentime);//1661642400889

    //console.log(eventtime);//1640995200000
     let realtime=currentime- eventdate  
     ///console.log(realtime);//-20647338454

     
let sec=1000;
let min=sec*60
let hourss=min*60
let day =hourss*24
console.log();


      sec=Math.floor((realtime%min)/sec);
     //console.log(sec);//-20647766
      min=Math.floor((realtime%hourss)/min);
     //console.log(min);//-20647766
      hourss=Math.floor((realtime%day)/hourss);
      day=Math.floor(realtime/day);
     //console.log(day);

 

//console.log(min);
hour.innerText=hourss+`hr`
    minute.innerText=min+`min`
    second.innerText=sec+`sec`
    
}
setInterval('countDown(),1000');
countDown()




no.forEach((e)=>{
    e.addEventListener("click",function() {
       no.forEach(e=>e.classList.remove("acti"))
       this.classList.add("acti")
    })
})


accountBtn.addEventListener("click",function(){
dropdown.classList.toggle("open")
})
  
 
help.addEventListener("click",function(e){
    helpList.classList.toggle("open-too")
     
    })
 



    //slide section
    
 
