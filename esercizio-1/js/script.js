// Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Si può utilizzare in questo caso la variabile const perché non si deve riassegnare.
const numeroUtente = parseInt(prompt('Inserisci un numero:'));

if (numeroUtente % 2 == 0) {
  console.log('Il numero inserito è: ', numeroUtente);
} else {
  console.log('Se il numero è dispari viene stampato il successivo: ', numeroUtente + 1);
}
