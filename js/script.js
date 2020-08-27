
// //1. Chiedere all’utente di inserire una parola
var parola = prompt("Inserisci una parola e ti diremo se è palindroma");
console.log(parola);

// //2. Creare una funzione per capire se la parola inserita è palindroma
var condizione = false;
function palindromo(letterA, letterZ) {
   if (letterA === letterZ) {
     condizione = true;
   }
}
// //3. Applicare un ciclo per il confronto di tutte le lettere della parola
for (var i = 0; i <= parola.length / 2; i++ ) {
  var corrispondenza = palindromo(parola[i], parola[parola.length-1-i]);
}
// //4. Stampare il risultato
if (condizione == false) {
  alert("La parola NON è palindroma.");
} else {
  alert("La parola è palindroma.")
}

// Pari e Dispari

//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var bet = prompt("Pari o dispari?");
var numberG = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numberG);
//2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomCPU(nmin, nmax) {
  var random = Math.floor(Math.random() * nmax + nmin);
  return random;
}
 var numberCPU = randomCPU(1, 5);
 console.log(numberCPU);

//3. Sommiamo i due numeri
var sum = numberG + numberCPU;
console.log(sum);
//4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var pari = 0;
function paridispari(num) {
  if (num % 2 != 0) {
    pari += 1;
  }
}
//5. Dichiariamo chi ha vinto.
var game = paridispari(sum);
if ((bet == "Pari") && (pari == 0)) {
  console.log("Complimenti, hai vinto!");
} else {
  console.log("Mi dispiace, hai perso");
}

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
