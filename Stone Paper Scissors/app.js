let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice")
let mssg = document.querySelector(".mssgpara")
let userpara = document.querySelector("#user-score")
let comppara = document.querySelector("#comp-score")

const genCompChoice = () => {
    let options = ["Stone", "Paper", "Scissors"]
    let randidx = Math.floor(Math.random() * 3)
    return options[randidx]
}

const gameDrawn = () => {
    mssg.innerText = "Game was Drawn. Play Again"
    mssg.style.backgroundColor = "black"
    mssg.style.transition = "all 0.3s ease-out"
}

const compWin = (userChoice, compChoice) => {
    compScore++
    comppara.innerText = compScore
    mssg.style.backgroundColor = "red"
    mssg.style.transition = "all 0.3s ease-out"
    mssg.innerText = `Computer Won ${compChoice} beats ${userChoice}`
}

const userWin = (userChoice, compChoice) => {
    userScore++
    userpara.innerText = userScore
    mssg.style.backgroundColor = "Green"
    mssg.style.transition = "all 0.3s ease-out"
    mssg.innerText = `You Won ${userChoice} beats ${compChoice}`
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice()
    if (userChoice === compChoice) {
        gameDrawn()
    }
    else {
        if (userChoice === "Stone") {
            if (compChoice === "Paper") {
                compWin(userChoice, compChoice)
            }
            else {
                userWin(userChoice, compChoice)
            }
        }
        if (userChoice === "Paper") {
            if (compChoice === "Scissors") {
                compWin(userChoice, compChoice)
            }
            else {
                userWin(userChoice, compChoice)
            }
        }
        if (userChoice === "Scissors") {
            if (compChoice === "Stone") {
                compWin(userChoice, compChoice)
            }
            else {
                userWin(userChoice, compChoice)
            }
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice)
        playGame(userChoice)
    })
})