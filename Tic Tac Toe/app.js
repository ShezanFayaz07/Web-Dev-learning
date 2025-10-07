let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnX = true;
let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset");  
let mssgContainer = document.querySelector(".mssg")
let mssg = document.querySelector("#mssg")
let newbtn = document.querySelector(".new-game")
let clickCount = 0;

boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        if(turnX){
            box.innerText = "X"
            turnX = false
            box.classList.remove("playerO")
            box.classList.add("playerX")
            clickCount++
        }
        else{
            box.innerText = "O"
            turnX = true
            box.classList.remove("playerX")
            box.classList.add("playerO")
            clickCount++
        }
        box.disabled = true;
        checkWinner()
        gameDrawn()
    })
})
const gameDrawn = () => {
    if (clickCount === 9) {
        mssg.innerText = "Game Drawn"
        mssgContainer.classList.remove("hide")
    }
}
const disableBox = () =>{
    for (box of boxes) {
        box.disabled = true;
    }
}
const ennableBox = () =>{
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const resetGame = () =>{
    turnX = true;
    ennableBox()
    mssgContainer.classList.add("hide")
    clickCount = 0
}
resetbtn.addEventListener("click" , resetGame)
newbtn.addEventListener("click" , resetGame)

const showWInner = (winner) =>{
    mssg.innerText = `Congratulation , Winner is ${winner}`
    mssgContainer.classList.remove("hide")
    disableBox();
}
const checkWinner = () => {
    for (idx  of winningPattern) {
        let posval1 = boxes[idx[0]].innerText
        let posval2 = boxes[idx[1]].innerText
        let posval3 = boxes[idx[2]].innerText
        if(posval1 != "" && posval2 != "" && posval3 != "")
        if(posval1 === posval2 && posval2 === posval3){
        showWInner(posval1)
    }
    }
}
