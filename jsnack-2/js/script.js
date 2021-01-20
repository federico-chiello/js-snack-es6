// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente.
// Usiamo i nuovi metodi degli array forEach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const oggetti = ['penna', 'occhiali', 'portafoglio', 'orologio', 'cappello', 'computer'];
let oggettiUtente = [];

const primoNumero = parseInt(prompt('Inserisci un primo numero compreso tra 0 e 5:'));
const secondoNumero = parseInt(prompt('Inserisci un altro numero compreso tra 0 e 5:'));

// **** Metodo con il forEach *****
oggetti.forEach((element, index) => {
  if (index <= secondoNumero && index >= primoNumero || index <= primoNumero && index >= secondoNumero) {
    oggettiUtente.push(element);
  }
});
console.log(oggettiUtente);

// ***** Metodo con il filter *****
// oggettiUtente = oggetti.filter((element, index) => {
//   return (index <= secondoNumero && index >= primoNumero || index <= primoNumero && index >= secondoNumero);
// });
// console.log(oggettiUtente);
