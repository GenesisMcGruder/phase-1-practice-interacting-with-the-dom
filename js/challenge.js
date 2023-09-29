const showSec = document.querySelector('#counter');
const pauseBtn = document.querySelector('#pause');
const btn = document.querySelectorAll('button')
const minusbtn = document.querySelector('#minus')
const plusbtn = document.querySelector('#plus')
const heartbtn = document.querySelector('#heart')
const submitbtn = document.getElementById('comment-form')
const newComm = document.getElementById('list')
//let newLike = document.querySelector('.likes')
let count = 0;
let intervalId;
let pause;
let btnsArray = []
// let likeObj = {}

document.addEventListener('DOMContentLoaded', () => {
    intervalId =  setInterval(function (){
        count += 1;
        showSec.textContent = parseInt(showSec.textContent) + 1
        //showSec.textContent = count;
    }, 1000);
});

for (let i=0; i <btn.length; i++){
    if (btn[i].id != "pause") {
        btnsArray.push(btn[i])
    }
}

function disabledBtn(btn) {
   btn.setAttribute("disabled", true) 
}

function resume(pauseBtn){
 pauseBtn.textContent = 'resume'
}

function ori2(pauseBtn) {
    pauseBtn.textContent = 'pause'
}

pauseBtn.addEventListener('click', () => {
    if (pause || pause == null) {
        clearInterval(intervalId);
        btnsArray.forEach(btn=> disabledBtn(btn))
        resume(pauseBtn)
        pause=false;
    } else if (pause==false) {
        pause=true;
        btnsArray.forEach(btn => btn.removeAttribute("disabled"))
        ori2(pauseBtn)
        intervalId = setInterval(function (){
            count += 1;
            showSec.textContent = count;
        }, 1000);
    }
}
    );

minusbtn.addEventListener('click',() =>
    showSec.textContent = parseInt(showSec.textContent) - 1) 

plusbtn.addEventListener('click', () =>
    showSec.textContent = parseInt(count) + 1);

submitbtn.addEventListener("submit", (event) => {
   let textInput = document.getElementById('comment-input').value
   let p = document.createElement("p")
   p.textContent = textInput
   newComm.append(p)
   submitbtn.reset()
   event.preventDefault()

}) 

// let likeObj = {}
// function heartClick (click) {
//     for(let i = 0; i > 1; i++ ){

//     }
// console.log(heartClick)
// }

// heartbtn.addEventListener("click", () => {
     //let counterValue = document.getElementById('counter').textContent
    // let li = document.createElement("li") 
    // if (likeObj[counterValue]) {
    //      likeObj[counterValue] += 1
    //  } else {
    //    likeObj[counterValue] = 1
    //  } 
    // li.innerText = `${counterValue} has been liked ${likeObj[counterValue]} times.` 
    // let likesUL = document.querySelector(".likes")
    // likesUL.appendChild(li)
//})
