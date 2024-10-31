let h2 = document.querySelector("h2");
let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;


document.addEventListener("keypress",function(){
    // console.log("Game Started");
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}


function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any Key to start.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" ,btnPress);
}


function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}