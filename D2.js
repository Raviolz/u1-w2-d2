/* ESERCIZIO 1 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */

let numb1 = 3;
let numb2 = 8;

if (numb1 > numb2) {
  console.log(numb1, "è il più grande tra i due numeri");
} else {
  console.log(numb2, "è il più grande tra i due numeri");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero = prompt("inserisci un numero");

if (numero !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let number = prompt("inserisci un numero");
/*Mancherebbe forse di tramutare stringa in numero ma funziona comunque */

if (number % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("da resto");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numb3 = 33;
let numb4 = 41;

if (numb3 === 8 || numb4 === 8 || numb3 + numb4 === 8 || numb3 - numb4 === 8) {
  console.log("Condizione verificata");
} else {
  console.log("condizione non verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = " ";
totalShoppingCart = 60;

if (totalShoppingCart > 50) {
  console.log("Available for Free Shipping ");
} else {
  console.log(totalShoppingCart + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart = totalShoppingCart - [(totalShoppingCart * 20) / 100];

console.log(totalShoppingCart);
if (totalShoppingCart > 50) {
  console.log("Available for Free Shipping ");
} else {
  console.log(totalShoppingCart + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numb6 = 68;
let numb7 = 7;
let numb8 = 870;

let firstnumber = null;
let middlenumber = null;
let lastnumber = null;

if (numb6 > numb7 && numb6 > numb8) {
  firstnumber = numb6;
  if (numb7 > numb8) {
    middlenumber = numb7;
    lastnumber = numb8;
  } else {
    middlenumber = numb8;
    lastnumber = numb7;
  }
} else if (numb7 > numb6 && numb7 > numb8) {
  firstnumber = numb7;
  if (numb6 >= numb8) {
    middlenumber = numb6;
    lastnumber = numb8;
  } else {
    middlenumber = numb8;
    lastnumber = numb6;
  }
} else firstnumber = numb8;
if (numb6 >= numb7) {
  middlenumber = numb6;
  lastnumber = numb7;
} else {
  middlenumber = numb7;
  lastnumber = numb6;
}

console.log(firstnumber, middlenumber, lastnumber);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let valore = "piera";
console.log(typeof valore);

if (typeof valore === "number") {
  console.log("E' un numero");
} else {
  if (typeof valore === "string") console.log("Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let num = 1745;
if (num % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 */

let val = 12;
if (val < 5) {
  console.log("Minore di 5");
} else if (val < 10) {
  console.log("Minore di 10");
} else {
  console.log("Uguale o maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let avuoto = [];
avuoto.push(1);
avuoto.push(2);
avuoto.push(3);
avuoto.push(4);
avuoto.push(5);
avuoto.push(6);
avuoto.push(7);
avuoto.push(8);
avuoto.push(9);
avuoto.push(10);

console.log(avuoto);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
avuoto.splice(9, 1, 100);
console.log(avuoto);
