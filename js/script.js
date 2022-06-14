/*
- L'utente fa una scelta tra 3 difficolta': lv.1 (1-100), lv.2 (1-81), lv.3 (1-49)
- Generare 16 numeri random da impostare come bombe senza duplicati
- Attraverso i promt chiedere all'utente di inserire dei numeri tra quelli della difficolta' scelta finche' non finisce il gioco: inserire nel tracciamento dei punti solo i numeri NON DUPLICATI
- Il gioco e' finito se sceglie un numero bomba (ha perso) o se esaurisce tutte le sue possibilita' (ha vinto)
- Comunicare al termine della partita il punteggio dell'utente ( cioe' il numero di tentativi giusti prima della bomba) + un messaggio di vittoria e sconfitta in base all'esito.
*/


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


// Genero 16 numeri random tra quelli del livello scento dall'utente 
// Inserisco i 16 numeri NON DUPLICATI nella nostra lista delle bombe

// Chiedere all'utente un numero tra quelli del livello scelto
// Se inserisce un numero compreso nella lista delle bombe allora: fine del gioco
// Altrimenti continua il gioco finche' non finisce tutti i tentativi: ha vinto

// Comunicare all'utente se ha vinto o perso + punteggio dei tentativi giusti che ha fatto