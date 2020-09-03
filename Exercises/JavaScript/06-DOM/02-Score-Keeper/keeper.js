var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1dis = document.querySelector("#p1dis");
var p2dis = document.querySelector("#p2dis");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDis = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        p1dis.textContent=p1score;
        if(p1score == winningScore){
            gameOver = true;
            p1dis.classList.add("winner");
        }
    }
});

p2button.addEventListener("click",function(){
    if(!gameOver){
        p2score++;
        p2dis.textContent=p2score;
        if(p2score == winningScore){
            gameOver = true;
            p2dis.classList.add("winner");
        }
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1score=0;
    p1dis.textContent=0;
    p2score=0;
    p2dis.textContent=0;
    p1dis.classList.remove("winner");
    p2dis.classList.remove("winner");
    gameOver=false;
}

numInput.addEventListener("change", function(){
    winningScoreDis.textContent = this.value;
    winningScore = this.value;
    reset();
});