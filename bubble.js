let timer =60;
let score =0;
let hitRn;

function makeBubble(){
    let clutter ="";


for(let i = 1; i<=150;i++){
    let rn = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`

}


document.querySelector('.panelbottom').innerHTML=clutter;

}



function timerStarter (){
     let timerInt  =   setInterval(()=>{
            if(timer>0){
                timer--;
                document.querySelector('#timer').innerHTML=timer;
            }
            else{
                clearInterval(timerInt);
                document.querySelector(".panelbottom").innerHTML=`<h1>Game Over</br> 
                Your score is ${score}</h1>`;
            }

        },1000)

}


function getNewHit(){
     hitRn =Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=hitRn;
}


function increaseScore(){
    score +=10;
    document.querySelector('#score').textContent=score;

}






document.querySelector('.panelbottom').addEventListener('click',(e)=>{
  let clicknNumber =(Number(e.target.textContent));
  if(hitRn===clicknNumber){
    increaseScore();
    makeBubble();
    getNewHit();
  }

  

}

)




getNewHit();
timerStarter();

makeBubble();

