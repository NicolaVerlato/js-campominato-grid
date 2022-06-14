// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// FASE PREPARATORIA
// Chiedere all'utente il livello di difficoltà
// Generare le 16 bombe random con un range da 1 maxNumber in base ai livelli del gioco
    // i numeri random delle bombe non possono essere duplicati
// definire un maxAttempts 


// FASE LOGICA 
// creazione ciclo while per stabilire quando il gioco deve finire
    // se il giocatore finisce il numero di tentativi comunicarlo con un alert 'Hai Vinto!'
    // se il giocatore calpesta una bomba comunicarlo con un alert 'Hai Perso!' e un alert con il numero di goodAttempt che ha fatto

// Chiedere all'utente il livello di difficoltà
const difficultyLevel = parseInt(prompt('Dimmi un livello di difficoltà da 1 a 3'));

// Chiedere all'utente un numero
const userNumber = parseInt(prompt('Dimmi un numero'))


let maxNumber;
if(difficultyLevel === 1) {
    maxNumber = 100;
} else if(difficultyLevel === 2) {
    maxNumber = 81;
} else if(difficultyLevel === 3) {
    maxNumber = 49;
}


// bombe
const maxbombs = 16;

// array bombe
const bombsArray = [];

while(bombsArray.length < maxbombs) {
    const bombs = getRndInteger(1, maxNumber);
    if(!bombsArray.includes(bombs)) {
        bombsArray.push(bombs);
    }
}
console.log(bombsArray)

// numero massimo di tentativi
const maxAttempts = maxNumber - bombsArray.length;

// il gioco finisce quando endGame === false
let endGame = true;
for( let i = 0; i < bombsArray.length; i++){
    const bomb = bombsArray[i];
    console.log(bomb)
    if(userNumber === bomb){
        alert('Hai Perso!');
        endGame = false;
    }
}







// ------------------
// FUNZIONI
// ------------------
// funzione per generare le bombe
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }