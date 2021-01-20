// Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


// Utilizziamo la variabile let.
let numeroUtente = parseInt(prompt('Inserisci un numero:'));

if (numeroUtente % 2 == 0) {
  console.log('Il numero inserito è: ', numeroUtente);
} else {
  numeroUtente += 1;
  console.log('Se il numero è dispari viene stampato il successivo: ', numeroUtente);
}

// Si può utilizzare anche la variabile const, però si può incrementare solo nel console.log se no dà errore in quanti si riassegna.
// const numeroUtente = parseInt(prompt('Inserisci un numero:'));
//
// if (numeroUtente % 2 == 0) {
//   console.log('Il numero inserito è: ', numeroUtente);
// } else {
//   console.log('Se il numero è dispari viene stampato il successivo: ', numeroUtente + 1);
// }
