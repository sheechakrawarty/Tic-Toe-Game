let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msgC");
let msg = document.querySelector(".msg");
let turn0 = true; let count =0;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");

   
};
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText="O";
            box.style.color = "green";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turn0=true;
        }
       box.disabled=true;
        count++; console.log(count);
       checkWinner();
       if(count === 9){
        msg.innerText = "Match draw!!";
        msgContainer.classList.remove("hide");

       }
    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner =(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    }

const checkWinner = () =>{
    for (let pattern of winPatterns){

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);
        }  
    }
    }
    };

    
    newBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);