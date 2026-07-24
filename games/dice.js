let coins = Number(localStorage.getItem("coins")) || 100;

const coinsDisplay = document.getElementById("coins");
const betInput = document.getElementById("bet");
const guessInput = document.getElementById("guess");
const dice = document.getElementById("dice");
const message = document.getElementById("message");
const rollButton = document.getElementById("roll");

function updateCoins() {
    coinsDisplay.innerHTML = "Your Coins: " + coins;
    localStorage.setItem("coins", coins);
}

updateCoins();

rollButton.onclick = function () {

    let bet = Number(betInput.value);
    let guess = Number(guessInput.value);

    if (isNaN(bet) || bet <= 0) {
        message.innerHTML = "Enter a valid bet!";
        return;
    }

    if (guess < 1 || guess > 6 || isNaN(guess)) {
        message.innerHTML = "Guess a number from 1 to 6!";
        return;
    }

    if (bet > coins) {
        message.innerHTML = "Not enough coins!";
        return;
    }

    coins -= bet;
    updateCoins();

    message.innerHTML = "🎲 Rolling...";

    let faces = [
        "🎲1️⃣",
        "🎲2️⃣",
        "🎲3️⃣",
        "🎲4️⃣",
        "🎲5️⃣",
        "🎲6️⃣"
    ];

    let animation = setInterval(function () {

        dice.innerHTML = faces[Math.floor(Math.random() * 6)];

    }, 100);

    setTimeout(function () {

        clearInterval(animation);

        let roll = Math.floor(Math.random() * 6) + 1;

        dice.innerHTML = faces[roll - 1];

        let difference = Math.abs(guess - roll);

        if (difference == 0) {

            let reward = bet * 4;
            coins += reward;

            message.innerHTML =
                "🎉 PERFECT! Dice rolled " + roll +
                ". You won " + reward + " coins!";

        }

        else if (difference == 1) {

            let reward = bet * 2;
            coins += reward;

            message.innerHTML =
                "⭐ CLOSE! Dice rolled " + roll +
                ". You won " + reward + " coins!";

        }

        else {

            message.innerHTML =
                "❌ Dice rolled " + roll +
                ". Better luck next time!";

        }

        updateCoins();

    }, 1000);

};