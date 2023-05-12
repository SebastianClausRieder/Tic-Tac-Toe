let fields = [];

let currentChar = 'cross';

function placeChar(field) {

    if (currentChar == 'cross') {
        currentChar = 'circle';
    } else {
        currentChar = 'cross';
    }

    fields[field] = currentChar;
    draw();
    checkForWinner();
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
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
    } //horizontal

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    } //horizontal
    
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    } //horizontal
    
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    } //vertikal
    
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    } //vertikal
    
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    } //vertikal
    
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    } //cross
    
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    } //cross

    if (winner) {
        console.log('and the winner is ' + winner)
    }
}