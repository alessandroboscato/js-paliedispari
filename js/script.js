
//1. Chiedere all’utente di inserire una parola
var parola = prompt("Inserisci una parola e ti diremo se è palindroma");

// Creare una funzione per capire se la parola inserita è palindroma
var condizione = false;
function palindromo(letterA, letterZ) {
   if (letterA == letterZ) {
     condizione = true;
   }
}

for (var i = 0; i <= parola.length / 2; i++ ) {
  var corrispondenza = palindromo(parola[i], parola[parola.length-i])
}

console.log(condizione);


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
