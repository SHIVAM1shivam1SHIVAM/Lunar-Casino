let coins = Number(localStorage.getItem("coins")) || 100;

const coinsDisplay = document.getElementById("coins");
const betInput = document.getElementById("bet");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerDisplay = document.getElementById("player");
const computerDisplay = document.getElementById("computer");
const message = document.getElementById("message");

function updateCoins() {
    coinsDisplay.innerHTML = "Your Coins: " + coins;
    localStorage.setItem("coins", coins);
}

updateCoins();

rockButton.addEventListener("click", function () {
    play("Rock");
});

paperButton.addEventListener("click", function () {
    play("Paper");
});

scissorsButton.addEventListener("click", function () {
    play("Scissors");
});

function play(playerChoice) {

    let bet = Number(betInput.value);

    if (isNaN(bet) || bet <= 0) {
        message.innerHTML = "Enter a valid bet!";
        return;
    }

    if (bet > coins) {
        message.innerHTML = "Not enough coins!";
        return;
    }

    coins -= bet;
    updateCoins();

    const choices = ["Rock", "Paper", "Scissors"];

    const emojis = {
        Rock: "✊",
        Paper: "✋",
        Scissors: "✌️"
    };

    playerDisplay.innerHTML = emojis[playerChoice];
    computerDisplay.innerHTML = "❔";
    message.innerHTML = "Computer is choosing...";

    setTimeout(function () {

        let computerChoice =
            choices[Math.floor(Math.random() * 3)];

        computerDisplay.innerHTML = emojis[computerChoice];

        if (playerChoice === computerChoice) {

            coins += bet;

            message.innerHTML =
                "🤝 Draw! Your bet was returned.";

        }

        else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {

            let reward = bet * 2;

            coins += reward;

            message.innerHTML =
                "🎉 You Win! +" + reward + " coins!";

        }

        else {

            message.innerHTML =
                "❌ You Lose! Better luck next time.";

        }

        updateCoins();

    }, 1000);

}