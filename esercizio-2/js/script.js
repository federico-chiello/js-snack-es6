// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numeri = ['1', '2', '3', '4', '5', '6'];
const rosso = 'red';
const verde = 'green';

for (let i = 0; i < numeri.length; i++) {

  if (numeri[i] % 2 != 0) {
    document.getElementById('testo-rosso').innerHTML +=
      `
      <li class="${rosso}">
        ${numeri[i]}
      </li>
      `;
  } else {
    document.getElementById('testo-verde').innerHTML +=
      `
      <li class="${verde}">
        ${numeri[i]}
      </li>
      `;
  }
}
