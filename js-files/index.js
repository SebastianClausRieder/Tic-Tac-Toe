let fields = [];
let gameOver = false;
let currentChar;
let winner = false;

function start() {
    document.getElementById('start').classList.add('d-none');
    currentChar = 'cross';
    document.getElementById('player-one').classList.add('aktive-player');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.remove('d-none');
    }
}

function placeChar(field) {

    if (!fields[field] && !gameOver) {
        if (currentChar == 'cross') {
            currentChar = 'circle';
            document.getElementById('player-one').classList.remove('aktive-player');
            document.getElementById('player-two').classList.add('aktive-player');
        } else {
            currentChar = 'cross';
            document.getElementById('player-one').classList.add('aktive-player');
            document.getElementById('player-two').classList.remove('aktive-player');
        }

        fields[field] = currentChar;
        draw();
        checkForWinner();
    }
}

function draw() {
    for (let f = 0; f < fields.length; f++) {

        if (fields[f] == 'circle') {
            document.getElementById('circle-' + f).classList.remove('d-none');
        } 

        if (fields[f] == 'cross') {
            document.getElementById('cross-' + f).classList.remove('d-none');
        } 
    }
}

function checkForWinner() {

    horizontal();
    vertikal();
    overcross();

    if (winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('game-over').classList.add('d-show');
            document.getElementById('winner').innerHTML = /*html */ `This game has won ${winner}!`;
        }, 2000);
    }

    if (fields.length > 8 && winner == false) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('game-over').classList.add('d-show');
            document.getElementById('winner').innerHTML = /*html */ `Nobody won this round!`;
        }, 2000);
    }
}

function horizontal() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scale(1.0)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scale(1.0)';
    }
    
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scale(1.0)';
    }
}

function vertikal() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scale(1.0)';
    }
    
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scale(1.0)';
    }
    
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scale(1.0)';
    }
}

function overcross() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scale(1.0)';
    }
    
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scale(1.0)';
    }
}

function restart() {
    gameOver = false;
    fields = [];
    currentChar = 'cross';
    winner = false;
    elemetReset();

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = null;
    }

    for (let c = 0; c < 9; c++) {
        document.getElementById('circle-' + c).classList.add('d-none');
        document.getElementById('cross-' + c).classList.add('d-none');
    }
}

function elemetReset() {
    document.getElementById('player-one').classList.remove('aktive-player');
    document.getElementById('player-two').classList.remove('aktive-player');
    document.getElementById('start').classList.remove('d-none');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('game-over').classList.remove('d-show');
}