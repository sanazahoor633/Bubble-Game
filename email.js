const pbtm = document.querySelector("#pbtm");
const hitVal = document.querySelector("#hitval");
const timerVal = document.querySelector("#timerval");
const scoreVal = document.querySelector("#scoreval");
var time = 20;
var score = 0;
var hittt = 0;




function bubble(){
    let clutter = "";
    for(i=0; i<154; i++) {
        let ar =  Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${ar}</div>`;
        pbtm.innerHTML = clutter;
    } 
}
function newHit(){
hittt =  Math.floor(Math.random() * 10);
hitVal.innerHTML = hittt
}

function getNewTimer() {
var timerint = setInterval(function() {
if(time > 0 ) {
    time--
timerVal.textContent = time
} else {
clearInterval(timerint);
pbtm.innerHTML = "<h1>Game Over</h1>";
hitVal.textContent = "0";
}
}, 1000)
}
function increaseScore() {
score += 10;
scoreVal.textContent = score

}
pbtm.addEventListener("click", function(dets){
let changeVal = Number(dets.target.textContent);
if(changeVal === hittt) {
    increaseScore();
    bubble();
    newHit();

}
//console.log(changeVal);

})






bubble();
newHit();
getNewTimer();
increaseScore();


















/*var timer = 3;
var score = 0;
var hitrn = 0;


function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewhit() {
   hitrn =  Math.floor(Math.random() * 10);
   document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    let clutter = "";
    for(var i = 1; i<=176; i++) {
        let ar = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${ar}</div>`;
    };
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
   var timerint = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }

    }, 1000)
}


document.querySelector("#pbtm").addEventListener("click", (dets) => {
    var clickd = Number(dets.target.textContent);
    if (clickd === hitrn) {
        increaseScore();
        makeBubble();
        getNewhit()
    }

})


makeBubble();
getNewhit()
runTimer();

*/
