let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randId = Math.floor(Math.random() * options.length);
    return options[randId];
};

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "blue";
};

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if(userChoice === "rock") {
            userWin = compChoice !== "paper";
        } else if(userChoice === "paper") {
            userWin = compChoice !== "scissor";
        } else {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
