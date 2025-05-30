let boxes = document.querySelectorAll(".box");
let restbutton = document.querySelector(".reset");
let newGamebtn = document.querySelector(".Newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count=0;

let turnO= true 

const resetgme = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const winpattterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {

    box.addEventListener("click", () =>{
    //console.log("box was clicked");
    if(turnO){
    box.innerText = "O";
    turnO = false;
    if(box.innerText === "O")
    {
        box.style.color = "aqua";
    }
    }
    else{
        box.innerText = "X";
        if(box.innerText === "X")
    {
        box.style.color = "brown";
    }
        turnO = true;
    }
    box.disabled = true; 
    count++;

    let iswinner = checkwinner();
    if(count === 9 && !iswinner){
        gamedraw();
    }

    });

});




const gamedraw = () => {
    msg.innerText = `Game was a draw.`;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
} 

const disbaleBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }

}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";

    }

}




const showWinner = (winner) => {
    msg.innerText = `congratulation! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
}



const checkwinner = () => {
  for(let pattern of winpattterns)
  {
   
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;  //pattern[0] = 1st index, pattern[1] = 2nd index, pattern[2] = 3rd index
    
    if(pos1val !="" && pos2val !="" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val)
        {
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
    }
  }

};

newGamebtn.addEventListener("click",resetgme);
restbutton.addEventListener("click",resetgme);

