let boxes = document.querySelectorAll(".box")
let resetG = document.querySelector(".resetG")
let newbtn = document.querySelector(".newGamebtn")
let messCon = document.querySelector(".mess-con")
let mess = document.querySelector(".mess")
let turnO = true;
let count = 0
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame= ()=>{
    count = 0;
    turnO = true;
    enabledBox();
    messCon.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
         if(turnO){
            box.innerText = "O";
            turnO = false
         }else{
            box.innerText = "X"
            turnO  = true;
         }
         box.disabled = true;
         count++;
         let isWinner =  checkWinner();
         if(count === 9 && !isWinner){
            gameDraw();
         }

         checkWinner();
    })
});
const gameDraw = () =>{
    mess.innerText = " Game was a draw "
    messCon.classList.remove("hide");
    disabledBox();
}

const disabledBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    mess.innerText = `Congratulation , Winner is ${ winner}`
    messCon.classList.remove("hide")
    disabledBox();
}


const checkWinner = ()=>{
    for(let pattern of winningPattern){
        let pos1val  = boxes[pattern[0]].innerText;
        let pos2val  = boxes[pattern[1]].innerText;
        let pos3val  = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val  && pos2val === pos3val){
                console.log("winner" , pos1val)
                showWinner(pos1val)
            }
        }
    }
};



newbtn.addEventListener("click" , resetGame)
resetG.addEventListener("click" , resetGame) 
