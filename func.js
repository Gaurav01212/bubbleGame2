var rn=0;
var hitVal=0;

function makeBubble(){
    let temp="";

    for(var i=1;i<=192;i++){
        rn=Math.floor(Math.random()*10);
        temp+=`<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector(".bottom").innerHTML=temp;
    
    
}


 function runTimmer(){
    var time=61;

    var timerint=setInterval(function(){

        if(time>0){
            time--;
            // console.log(time);
           document.querySelector("#timer").textContent=time;
        }
        else{
            
            gsap.to("#bubble",{
                scale:0,
                duration:2
            
            })


         var over=   document.querySelector(".bottom");
         
         over.innerHTML=`<div id="over">Game Over !</div>`
        
            clearInterval(timerint);
        }
        
        
    },1000);
    
 }
 
 function getHit(){

 hitVal=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitVal;
 }
var score=0;
 function getScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
 }
 runTimmer();
 makeBubble();
 getHit();

 document.querySelector(".board").addEventListener("click",function(dets){
    var clickedVal=Number(dets.target.textContent);




    console.log(hitVal);
    console.log(clickedVal);
    
    if(clickedVal==hitVal){
        getHit();
 makeBubble();
        getScore();
    
        

    }
    else{
        getHit();
        makeBubble();
    }
 })
 


var tl=gsap.timeline();

tl.from(".board",{
    opacity:0,
    scale:0,
    
    // stragger:2
})

tl.from("h2",{
    opacity:0,
    scale:0,
    
    // stragger:2
})

tl.from(".box",{
    y:40,
    opacity:0,
    scale:0,
    
    // stragger:2
})

