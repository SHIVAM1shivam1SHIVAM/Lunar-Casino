let coins = Number(localStorage.getItem("coins")) || 100;

const coinsDisplay = document.getElementById("coins");
const betInput = document.getElementById("bet");
const coin = document.getElementById("coin");
const message = document.getElementById("message");

const headsButton = document.getElementById("heads");
const tailsButton = document.getElementById("tails");

function updateCoins() {
    coinsDisplay.innerHTML = "Your Coins: " + coins;
    localStorage.setItem("coins", coins);
}

updateCoins();
headsButton.onclick = function () {

    play("Heads");

};

tailsButton.onclick = function () {

    play("Tails");

};

function play(choice) {

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

    message.innerHTML = "Flipping...";
    let animation = setInterval(function () {

    let faces = ["🙂", "👑"];

    coin.innerHTML =
    faces[Math.floor(Math.random() * faces.length)];

},100);

    setTimeout(function () {
    clearInterval(animation);

        let flip = Math.random() < 0.5 ? "Heads" : "Tails";

        if (flip == "Heads") {
            coin.innerHTML = "🙂";
        }
        else {
            coin.innerHTML = "👑";
        }

        if (choice == flip) {

            let reward = bet * 2;

            coins += reward;

            message.innerHTML =
            "🎉 It was " + flip + "! You won " + reward + " coins!";

        }
        else {

            message.innerHTML =
            "❌ It was " + flip + "! You lost.";

        }

        updateCoins();

    },1000);

}