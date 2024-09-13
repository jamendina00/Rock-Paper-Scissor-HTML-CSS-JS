function play() {
    let player1 = document.getElementById("image1");
    let player2 = document.getElementById("image2");

    player1.style.backgroundColor = "transparent";
    player2.style.backgroundColor = "transparent";

    let result = document.getElementById("result");
    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");

    let random1 = Math.floor(Math.random() *3)+1;
    let random2 = Math.floor(Math.random() *3)+1;

    if (random1 === 1) {
        player1.src = "img/rock-hand.png";
    }else if (random1 === 2) {
        player1.src = "img/paper-hand.png";
    }else {
        player1.src = "img/scissor-hand.png";
    }

    if (random2 === 1) {
        player2.src = "img/rock-hand.png";
    }else if (random2 === 2) {
        player2.src = "img/paper-hand.png";
    }else {
        player2.src = "img/scissor-hand.png";
    }

    if (random1 === random2 ) {
    result.innerHTML = "DRAW!"
    }else if (random1 === 2 && random2 === 1 || random1 === 3 && random2 == 2 || random1 == 1 && random2 === 3) {
    result.innerHTML = "PLAYER 1 WON"
    score1.innerHTML = parseInt(score1.innerHTML) + 1;
    }else  {
    result.innerHTML = "PLAYER 2 WON"
    score2.innerHTML = parseInt(score2.innerHTML) + 1;
    }

    if(score1.innerHTML === "3") {
        player1.style.backgroundColor = "transparent";
        score1.innerHTML = "0";
        player2.style.backgroundColor = "transparent";
        score2.innerHTML = "0";
    }else if(score2.innerHTML === "3") {
        player2.style.backgroundColor = "transparent";
        score2.innerHTML = "0";
        player1.style.backgroundColor = "transparent";
        score1.innerHTML = "0";
    }
}