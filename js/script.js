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

// array per i tentativi buoni dell'utente
const goodAttempt = [];

// massimo di numeri in base al livello di difficoltà
let maxNumber;
if(difficultyLevel === 1) {
    maxNumber = 100;
} else if(difficultyLevel === 2) {
    maxNumber = 81;
} else if(difficultyLevel === 3) {
    maxNumber = 49;
}

// numero massimo bombe
const maxbombs = 16;

// array bombe senza funzione
// const bombsArray = [];

// while(bombsArray.length < maxbombs) {
//     const bombs = getRndInteger(1, maxNumber);
//     if(!bombsArray.includes(bombs)) {
//         bombsArray.push(bombs);
//     }
// }

// array bombe con funzione (l'array è dento la funzione)
const bombsArray = randomBombs(1, maxbombs);

console.log(bombsArray)

// numero massimo di tentativi
const maxAttempts = maxNumber - bombsArray.length;

// il gioco finisce quando endGame === false
let endGame = true;

// Chiedere all'utente un numero finchè il numero stesso è uguale al numero della bomba
// se l'utente non prende nessuna bomba verrà mandato un alert di vittoria
while(endGame){
    const userNumber = parseInt(prompt('Dimmi un numero'))
    if(!goodAttempt.includes(userNumber)) {
        goodAttempt.push(userNumber);
    } else{
        alert('Numero già inserito');
    }

    // se l'utente azzecca tutti i numeri giusti
    if(goodAttempt.length === maxAttempts){
        endOfGame('win', goodAttempt.length);
        endGame = false;
    } else if(bombsArray.includes(userNumber)){
        // se l'utente calpesta una bomba
        endGame = false;
        endOfGame('lose', goodAttempt.length);
    }
}


// console.log(goodAttempt);    
    


// ------------------
// FUNZIONI
// ------------------
// funzione per generare le bombe
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione per creare array bombe random
function randomBombs(min, max) {
    const array = [];

    while(array.length < max) {
        const bombs = getRndInteger(min, maxNumber);
        if(!array.includes(bombs)) {
            array.push(bombs);
        }
    }

    return array;
}

// funzione per endGame
function endOfGame(result, score) {

    if(result === 'win') {
        alert('Hai Vinto!');
        alert(score);
    } else {
        alert('Hai perso');
        alert('Il tuo punteggio è: ' + score);
    }
}
