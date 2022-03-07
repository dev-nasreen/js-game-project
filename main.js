const formElm = document.querySelector("form");
const luckyInputElm = document.querySelector(".luck-input");
const showLuckyNumElm = document.querySelector(".lucky-number span");
const p1BtnElm = document.querySelector(".p1btn");
const p2BtnElm = document.querySelector(".p2btn");
const p1InpElm = document.querySelector(".p1");
const p2InpElm = document.querySelector(".p2");
const winnerElm = document.querySelector(".winner");
const resetbtnElm = document.getElementById('resetbtn');


let luckNum = 0;
let p1Value = 0;
let p2Value = 0;
let p1Turn = true;
let p2Turn = true;

function initialView(){
    // initial view of DOM
    showLuckyNumElm.textContent = 0;
    p1InpElm.textContent = 0;
    p2InpElm.textContent = 0;
    p1BtnElm.removeAttribute('disabled');
    p2BtnElm.removeAttribute('disabled');
    winnerElm.textContent = '';

}

function winnerState(player){
    winnerElm.textContent = `${player} is the winner`;
     //disabling p1Btn player
    p2BtnElm.setAttribute('disabled', 'disabled')
    //disabling p2Btn player
    p1BtnElm.setAttribute('disabled', 'disabled')
}

formElm.addEventListener("submit", function(e){
    e.preventDefault();
    //console.log(luckyInputElm.value);
    //get value from user input
    luckNum = parseInt(luckyInputElm.value);
    // show user value in website
    showLuckyNumElm.textContent = luckNum;
    //reset the input
    luckyInputElm.value = '';

})

p1BtnElm.addEventListener("click", function(){
    p1Value = Math.floor((Math.random() * 20) + 1);
    console.log(p1Value);
    p1InpElm.textContent = p1Value;
    // switch off p1turn and start p2turn
    p1Turn = false;
    p2Turn = true;
    //p1btn disable
    p1BtnElm.setAttribute('disabled', 'disabled');
    p2BtnElm.removeAttribute('disabled');

    if(p1Value === luckNum){
        winnerState('p1')
    }

})
p2BtnElm.addEventListener("click", function(){
    p2Value = Math.floor((Math.random() * 20) + 1);
    p2InpElm.textContent = p2Value;
    // switch off p1turn and start p2turn
    p2Turn = false;
    p1Turn = true;
    //p1btn disable
    p2BtnElm.setAttribute('disabled', 'disabled');
    p1BtnElm.removeAttribute('disabled');

    if(p2Value === luckNum){
        winnerState('p2')
    }
})

resetbtnElm.addEventListener('click', function(){
    initialView();
})