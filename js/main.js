'use strict';

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const kilometers = Number(prompt('Inserisci i chilometri che vuoi percorrere'));
console.log(kilometers);

const age = Number(prompt('Inserisci la tua età'));
console.log(age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

if(!isNaN(kilometers) && !isNaN(age)) {
    console.log('chilometri e età sono dei numeri')
} else {
    console.log('uno dei dati inseriti non è un numero')
}

//  - definisco una variabile prezzoPieno e salvo la moltiplicazione kilometers * 0.21

// va applicato uno sconto del 20% per i minorenni

//  - definisco una variabile prezzoScontato
 

// va applicato uno sconto del 40% per gli over 65.

//  - SE age < 18
//    - prezzoScontato = prezzoPieno - prezzoPieno * 20 / 100 e stampo
//    ALTRIMENTI SE age > 65
//      - prezzoScontato = prezzoPieno - prezzoPieno * 40 / 100 e stampo
//    ALTRIMENTI
//      - stampo prezzoPieno

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//  - utilizzo ... per arrotondare output a massimo due decimali