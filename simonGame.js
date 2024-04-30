let gameSeq = [];
let userSeq = [];
let btns = ['yellow', 'red', 'purple', 'green'];

let level = 0;
let started = false;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false)
        console.log('started game');
        started = true;
        levelUp();
});
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //choose random btn
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
function check(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! <b> Your score is ${level}</b> <br/>Press any key to start `;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="#8ecae6";
        },150);
        reset();
    }
}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

let btnAll = document.querySelectorAll(".btn");
for (let btn of btnAll) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}
function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}