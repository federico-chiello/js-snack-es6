// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parolaUno = prompt('Inserisci una parola:');
const parolaDue = prompt('Inserisci un\'altra parola:');

if (parolaUno.length > parolaDue.length) {
  console.log('La parola più lunga è la prima: ', parolaUno);
} else if (parolaDue.length > parolaUno.length) {
  console.log('La parola più lunga è la seconda: ', parolaDue);
} else {
  console.log('Le due parole hanno la stessa lunghezza. ' + 'Parola uno: ' + parolaUno + ' ; ' + 'parola due: ' + parolaDue);
}
