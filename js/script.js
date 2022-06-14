/*
- L'utente fa una scelta tra 3 difficolta': lv.1 (1-100), lv.2 (1-81), lv.3 (1-49)
- Generare 16 numeri random da impostare come bombe senza duplicati
- Attraverso i promt chiedere all'utente di inserire dei numeri tra quelli della difficolta' scelta finche' non finisce il gioco: inserire nel tracciamento dei punti solo i numeri NON DUPLICATI
- Il gioco e' finito se sceglie un numero bomba (ha perso) o se esaurisce tutte le sue possibilita' (ha vinto)
- Comunicare al termine della partita il punteggio dell'utente ( cioe' il numero di tentativi giusti prima della bomba) + un messaggio di vittoria e sconfitta in base all'esito.
*/

// Variabile numero massimo bombe
const maxBombs = 16;


// Scenta dell'utente per la difficolta' del gioco 
// Se sceglie lv.1 i numeri sono compresi tra 1-100
// Se sceglie lv.2 i numeri sono compresi tra 1-81
// Se sceglie lv.3 i numeri sono compresi tra 1-49
const userLv = prompt('Scegli la difficoltà tra 1 - 2 - 3')
console.log('Livello scento da utente:', userLv);

// Creo una variabile con i numeri massimi per ogni livello da inserire poi nella generazione di numeri random per livello
let maxNumber;
if(userLv === "1") {
    maxNumber = 100;
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

    console.log('Numero random:', lvMaxNumber);

    if(!listBombsNumber.includes(lvMaxNumber)) {
        listBombsNumber.push(lvMaxNumber);
    } 
}

console.log('Lista totale bombe:', listBombsNumber);


// Chiedere all'utente un numero tra quelli del livello scelto
// Se inserisce un numero compreso nella lista delle bombe allora: fine del gioco
// Altrimenti continua il gioco finche' non finisce tutti i tentativi: ha vinto

// Comunicare all'utente se ha vinto o perso + punteggio dei tentativi giusti che ha fatto





/*************************************
                FUNCTION 
**************************************/
// Genero numeri random tra 1 e maxNumber
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


