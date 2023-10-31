// this is the sore bored to store value by increasing ten 
let scoreval=0;
function increaseScore(){
 scoreval=scoreval+10;
 document.getElementById("score").textContent=scoreval;
}

// lets add evenlisner yha par humare pass bahut sre lisner lagane padte agar hum simple path follow karte lekin is case me entry hoti hai event bubbling ki 

  document.getElementById('pbtm').addEventListener("click",(dets)=>{
  var clickednum=Number( dets.target.textContent) 
  if(clickednum===hitrn){
    increaseScore()
    makebubble()
    hittheButton()
  }
})

//  here is the function of making hit button 
var hitrn=0;
function hittheButton(){
  hitrn = Math.floor(Math.random()*10);
  document.getElementById("hit").textContent=hitrn;
}
hittheButton()


// this is the function of make bubble

 function makebubble(){
    var clutter = " ";
    for(var i=1;i<=240;i++){
      var rn = Math.floor( Math.random()*10 )
        clutter+= ` <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
    
 }
 makebubble()

//  this is the function of make time 
 var timerval=60;
 function timerFunction(){
  
    var timer=setInterval(() => {
      if(timerval>0){
        timerval--;
      document.getElementById('timervalue').textContent=timerval;
      }
      else{
        clearInterval(timer);
        document.getElementById('pbtm').innerHTML="";
      }
      
    }, 1000);
  
  
    
  
 }
 timerFunction()

 