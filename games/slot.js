let coins = Number(localStorage.getItem("coins")) || 100;

const spinButton = document.getElementById("spin");
const result = document.getElementById("result");
const coinsDisplay = document.getElementById("coins");
const message = document.getElementById("message");
const betInput = document.getElementById("bet");

let spinning = false;


function updateCoins() {
    coinsDisplay.innerHTML = "Your Coins: " + coins;
    localStorage.setItem("coins", coins);
}

updateCoins();



function randomSymbol() {

    let chance = Math.random() * 100;

    if (chance < 50) {
        return "⭐";
    }
    else if (chance < 85) {
        return "♠️";
    }
    else if (chance < 95) {
        return "💎";
    }
    else if (chance < 99.5) {
        return "7️⃣";
    }
    else {
        return "🌙";
    }

}



spinButton.onclick = function () {

    if (spinning) return;


    let bet = Number(betInput.value);


    if (isNaN(bet) || bet <= 0) {
        message.innerHTML = "Enter a valid bet!";
        return;
    }


    if (bet > coins) {
        message.innerHTML = "Not enough coins!";
        return;
    }



    // only bet is removed
    coins -= bet;

    updateCoins();


    spinning = true;
    spinButton.disabled = true;

    message.innerHTML = "🎰 Spinning...";


    let count = 0;


    let animation = setInterval(function () {


        result.innerHTML =
            randomSymbol() + " | " +
            randomSymbol() + " | " +
            randomSymbol();


        count++;


        if (count >= 25) {


            clearInterval(animation);


            let a = randomSymbol();
            let b = randomSymbol();
            let c = randomSymbol();


            result.innerHTML =
                a + " | " +
                b + " | " +
                c;



            if (a=="🌙" && b=="🌙" && c=="🌙") {

                let reward = bet * 20;
                coins += reward;

                message.innerHTML =
                "🌙 LEGENDARY MOON JACKPOT! +" + reward;

            }


            else if (a=="7️⃣" && b=="7️⃣" && c=="7️⃣") {

                let reward = bet * 10;
                coins += reward;

                message.innerHTML =
                "🎰 777 JACKPOT! +" + reward;

            }


            else if (a=="💎" && b=="💎" && c=="💎") {

                let reward = bet * 7;
                coins += reward;

                message.innerHTML =
                "💎 Diamond Jackpot! +" + reward;

            }


            else if (a=="♠️" && b=="♠️" && c=="♠️") {

                let reward = bet * 4;
                coins += reward;

                message.innerHTML =
                "♠️ Spade Win! +" + reward;

            }


            else if (a=="⭐" && b=="⭐" && c=="⭐") {

                let reward = bet * 2;
                coins += reward;

                message.innerHTML =
                "⭐ Star Win! +" + reward;

            }

else if (a == b || b == c || a == c) {

    let reward = bet * 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    coins += reward;

    message.innerHTML =
    "✨ Small Match Bonus! +" + reward + " coins";

} 
            else {

                message.innerHTML =
                "❌ No Match!";

            }



            updateCoins();

            spinning = false;
            spinButton.disabled = false;


        }


    },80);

};
