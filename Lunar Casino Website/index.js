let coins = Number(localStorage.getItem("coins")) || 1000000000;

document.getElementById("homeCoins").innerHTML =
"Your Coins: " + coins;