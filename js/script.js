/*
- L'utente fa una scelta tra 3 difficolta': lv.1 (1-100), lv.2 (1-81), lv.3 (1-49)
- Generare 16 numeri random da impostare come bombe senza duplicati
- Attraverso i promt chiedere all'utente di inserire dei numeri tra quelli della difficolta' scelta finche' non finisce il gioco: inserire nel tracciamento dei punti solo i numeri NON DUPLICATI
- Il gioco e' finito se sceglie un numero bomba (ha perso) o se esaurisce tutte le sue possibilita' (ha vinto)
- Comunicare al termine della partita il punteggio dell'utente ( cioe' il numero di tentativi giusti prima della bomba) + un messaggio di vittoria e sconfitta in base all'esito.
*/

// Variabile numero massimo bombe
const maxBombs = 2;



// Scenta dell'utente per la difficolta' del gioco 
// Se sceglie lv.1 i numeri sono compresi tra 1-100
// Se sceglie lv.2 i numeri sono compresi tra 1-81
// Se sceglie lv.3 i numeri sono compresi tra 1-49
const userLv = prompt('Scegli la difficoltà tra 1 - 2 - 3')
console.log('Livello scento da utente:', userLv);

// Creo una variabile con i numeri massimi per ogni livello da inserire poi nella generazione di numeri random per livello
let maxNumber;
if(userLv === "1") {
    maxNumber = 5;
} else if(userLv === "2") {
    maxNumber = 81;
} else if(userLv === "3") {
    maxNumber = 49;
}
console.log('Livello massimo', maxNumber);

// GENERAZIONE DI 16 NUMERI (RANDOM) BOMBA
// listBombsBumber ----> array in cui verranno inseriti i numeri random
// lvMaxNumber ----> variabile function: numeri random da 1 a maxNumber
// pushare nell'array listBombsBumber solo se i numeri non sono gia' presenti finche' non raggiunge un totale di: 16 elementi (in questo caso numeri)
const listBombsNumber = [];

while(listBombsNumber.length < maxBombs) {

    let lvMaxNumber = randomNumber(1, maxNumber);

    if(!listBombsNumber.includes(lvMaxNumber)) {
        listBombsNumber.push(lvMaxNumber);
    } 
}

console.log('Lista totale bombe:', listBombsNumber);


// FUNZIONAMENTO DEL GIOCO
// correctNumbers ----> array da riempire con i numeri giusti inseriti dall'utente che formeranno il suo punteggio finale
// Chiedere all'utente un numero tra quelli del livello scelto
// endGame = true  variabile da cambiare in false per finire il gioco
// Se userNumber e' compreso nella lista listBombsNumber allora: hai perso "endGame = false" fine del gioco
// Altrimenti continua il gioco finche' non finisce tutti i tentativi: hai vinto "endGame = false" fine del gioco

// Variabile numero massimo di tentativi 
let maxAttempts = maxNumber - maxBombs;
console.log(maxAttempts);

// Array punteggio finale con tutti i numeri giusti dati dal cliente
const correctNumbers = [];

let endGame = true;

while(endGame) {
    //  Nuro inserito dall'utente
    const userNumbers = parseInt( prompt(`Scrivi dei numeri da 1 a ${maxNumber}`) );
    
    // Se userNumber e' compreso nell'array listBombNumber, endGame = false, fine del gioco
    if(listBombsNumber.includes(userNumbers)){
        endGame = false;
        isLostOrWin('youLost');
    } 
    // Altrimenti continua e pusha tutti gli userNumbers non duplicati in correctNumbers
    else {
        if(!correctNumbers.includes(userNumbers)) {
            correctNumbers.push(userNumbers)
        }
        if(correctNumbers.length === maxAttempts) {
            endGame = false;
            isLostOrWin('youWon');
        }
    } 

    // Per vedere ogni aumento di punteggio registrato
    console.log('punteggio:', correctNumbers);
}
console.log('punteggio:', correctNumbers);



// Comunicare all'utente se ha vinto o perso + punteggio dei tentativi giusti che ha fatto






/*************************************
                FUNCTION 
**************************************/
// Genero numeri random tra 1 e maxNumber
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isLostOrWin(finalResult) {
    if(finalResult === 'youWon') {
        alert(`Congratulazioni, hai vinto. Il tuo punteggio è : ${correctNumbers.length}`);

    } else {
        alert(`Peccato, hai perso. Il tuo punteggio è : ${correctNumbers.length}`);
    }
}



